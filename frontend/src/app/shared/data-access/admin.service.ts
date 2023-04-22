import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  readonly APIUrl = environment.apiURL

  main() {
    return this.http.get(this.APIUrl + 'main/')
  }

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

  deleteFile(id : string) {
    return this.http.delete(`${this.APIUrl}files/delete/${id}/`)
  }

  getDocument(id : string) {
    return this.http.get(`${this.APIUrl}documents/get/${id}/`)
  }

  getFile(id : string) {
    return this.http.get(`${this.APIUrl}files/get/${id}/`)
  }

  getRequests(id : any) {
    return this.http.get(`${this.APIUrl}requests/get/${id}/`)
  }

  updateUser(user : any) {
    return this.http.put(`${this.APIUrl}users/update/${user.uid}/`, user)
  }

  deleteUser(id : string) {
    return this.http.delete(`${this.APIUrl}users/delete/${id}/`)
  }

  deleteRequest(id : string) {
    return this.http.delete(`${this.APIUrl}requests/delete/${id}/`)
  }

  approveRequest(id : string) {
    return this.http.get(`${this.APIUrl}requests/approve/${id}/`)
  }

  addVacation(request : any) {
    return this.http.post(`${this.APIUrl}vacations/add/`, request)
  }

  getVacations(id : any) {
    return this.http.get(`${this.APIUrl}vacations/get/${id}/`)
  }

  getAllVacations() {
    return this.http.get(`${this.APIUrl}vacations/get/all/`)
  }

  deleteVacation(id : string) {
    return this.http.delete(`${this.APIUrl}vacations/delete/${id}/`)
  }

  updateVacation(vacation : any) {
    return this.http.put(`${this.APIUrl}vacations/update/${vacation.id}/`, vacation)
  }

  onChat(data : any) {
    return this.http.post(this.APIUrl + 'chat/', data)
  }
}
