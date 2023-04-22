import { Injectable } from '@angular/core';
import { environment } from 'src/environments';
import { BehaviorSubject } from 'rxjs';
import { getAuth, onAuthStateChanged, GoogleAuthProvider, signOut, signInWithPopup } from "firebase/auth";
import { HttpClient } from '@angular/common/http';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  private userUpdated = new BehaviorSubject<any>(null)
  readonly APIUrl = environment.apiURL + 'user/'

  provider = new GoogleAuthProvider();
  private auth = getAuth()

  login() {
    signInWithPopup(this.auth, this.provider)
    .then((result : any) => {
      this.http.post(this.APIUrl + 'login/', result.user).subscribe((res) => {
        if (result.user) this.userUpdated.next({...result.user, ...res})
        else this.userUpdated.next(false)
      })
    });
  }

  init() {
    onAuthStateChanged(this.auth, (user) => {
      if (user) {
        this.http.get(`${this.APIUrl}authorization/${user?.uid}/`).subscribe(res => {
          this.userUpdated.next({...user, ...res})
        })
      }
      else this.userUpdated.next(false)
    })
    return this.auth.currentUser
  }

  getUserUpdateListener() {
    return this.userUpdated.asObservable().pipe(
      filter(user => user !== null)
    )
  }

  logout() {
    signOut(this.auth)
    this.userUpdated.next(false)
  }
}
