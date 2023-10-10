import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  login(accountName: string, password: string) {
    return this.http.post('http://localhost:3000/api/signin', {
      accountName,
      password,
    });
  }

  register(value: any) {
    return this.http.post('http://localhost:3000/api/signup', value);
  }
}
