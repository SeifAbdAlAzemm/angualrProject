import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginUrl = 'https://fakestoreapi.com/auth/login'; // Replace with your API URL
  private registerUrl = 'https://fakestoreapi.com/users'; // Replace with your API URL

  constructor(private http: HttpClient) {}

  // Register a new user
  register(user: any): Observable<any> {
    return this.http.post(`${this.registerUrl}`, user);
  }

  // Sign in a user
  signIn(credentials: any): Observable<any> {
    return this.http.post(`${this.loginUrl}`, credentials);
  }

  // Store user token in localStorage
  saveToken(token: string): void {
    localStorage.setItem('authToken', token);
  }

  // Get user token
  getToken(): string | null {
    return localStorage.getItem('authToken');
  }

  // Logout
  logout(): void {
    localStorage.removeItem('authToken');
  }

  // Check if user is logged in
  isLoggedIn(): boolean {
    return !!this.getToken();
  }
}
