import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = "http://localhost:3000"

  constructor(private http: HttpClient) { }

  // Register Function
  register(email: any, pword: any, fname: any, lname: any) {
    let body = {
      email: email,
      password: pword,
      firstName: fname,
      lastName: lname
    }
    // make http post request to backend to store user data
    return this.http.post(`${this.baseUrl}/users/register`, body)

  }

  // Login Function
  login(email: any, password: any) {

    const body = {
      email: email,
      password: password
    }
    return this.http.post(`${this.baseUrl}/users/login`, body)
  }

}
