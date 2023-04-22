import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  readonly APIUrl = environment.apiURL

  getUsers() {
    return this.http.get(this.APIUrl + 'users/get/all/')
  }

  getFiles() {
    return this.http.get(this.APIUrl + 'documents/get/all/')
  }
}
