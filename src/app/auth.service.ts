// auth.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = 'https://nitpyweb5.onrender.com'; // Replace with your backend API URL

  constructor(private http: HttpClient) {}
  setUserData(userData: any): void {
    // Implement logic to store user data, such as in a property or local storage
    // For example:
    // this.user = userData;
    localStorage.setItem('userData', JSON.stringify(userData));
  }

  login(rollNo: string, password: string): Observable<any> {
    const loginData = { roll_no: rollNo, password: password };

    return this.http.post(`${this.baseUrl}/login`, loginData);
  }

  register(
    rollNo: string,
    name: string,
    department: number|null, // Assuming department is a number
    year: number|null, // Assuming year is a number
    email: string,
    password: string
  ): Observable<any> {
    const registerData = {
      roll_no: rollNo,
      name: name,
      department: department,
      year: year,
      email: email,
      password: password,
    };

    return this.http.post(`${this.baseUrl}/register`, registerData);
  }
}
