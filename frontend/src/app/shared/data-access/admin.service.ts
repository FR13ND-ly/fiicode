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

  addFile(file : any) {
    let formData = new FormData()
    formData.append('file', file, file.name)
    return this.http.post(`${this.APIUrl}files/upload/`, formData)
  }

  addDocument(document : any) {
    return this.http.post(`${this.APIUrl}documents/add/`, document)
  }

  deleteDocument(id : string) {
    return this.http.delete(`${this.APIUrl}documents/delete/${id}/`)
  }
}
