import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(
    private http: HttpClient
  ) { }

  // field: id, accountName, password, role
  // relation:
  // ?,[]: employee, customer

  getAccount() {
    return this.http.get('http://localhost:3000/api/account');
  }

  getAccountById(id: number) {
    return this.http.get(`http://localhost:3000/api/account/${id}`);
  }
}
