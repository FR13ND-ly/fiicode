import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  readonly APIUrl = environment.apiURL

  getFiles() {
    return this.http.get(this.APIUrl + 'documents/get/all/')
  }

  getVacations(id : any) {
    return this.http.get(`${this.APIUrl}vacations/get/${id}/`)
  }

  addRequest(data : any) {
    return this.http.post(this.APIUrl + 'requests/add/', data)
  }
}
