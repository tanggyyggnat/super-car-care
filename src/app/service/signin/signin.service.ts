import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SigninService {

  constructor(
    private http:HttpClient
  ) { }

//account
  // field: id, accountName, password, role
  // relation:
  // ?,[]: employee, customer

  //{ accountName, password }
  signin(accountName: string, password: String) {
    return this.http.post('http://localhost:3000/api/signin', {accountName, password})
  }
}
