import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginUrl = 'https://fakestoreapi.com/auth/login'; 
  private registerUrl = 'https://fakestoreapi.com/users';

  private isAuthenticated = new BehaviorSubject<boolean>(this.hasToken()); // Track authentication status

  constructor(private http: HttpClient) {}

  private hasToken(): boolean {
    return !!localStorage.getItem('authToken');
  }

  get authStatus$(): Observable<boolean> {
    return this.isAuthenticated.asObservable();
  }

  register(user: User): Observable<any> {
    return this.http.post(`${this.registerUrl}`, user);
  }

  signIn(credentials: any): Observable<any> {
    return this.http.post(`${this.loginUrl}`, credentials);
  }

  saveToken(token: string): void {
    localStorage.setItem('authToken', token);
    this.isAuthenticated.next(true); // Notify subscribers
  }

  getToken(): string | null {
    return localStorage.getItem('authToken');
  }

  logout(): void {
    localStorage.removeItem('authToken');
    this.isAuthenticated.next(false); // Notify subscribers
  }

  isLoggedIn(): boolean {
    return this.hasToken();
  }
}