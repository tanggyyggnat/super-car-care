import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(
    private http: HttpClient
  ) { }

  //account
  // field: id, accountName, password, role
  // relation:
  // ?,[]: employee, customer

  //customer
  // field: id, custName, custSurname, custPhone, custEmail, accountId
  // relation: account
  // ?,[]: booking, car

  //{ id, password, custName, custSurname, custPhone, custEmail }
  signup(data: any) {
    return this.http.post('http://localhost:3000/api/signup', data)
  }
}
