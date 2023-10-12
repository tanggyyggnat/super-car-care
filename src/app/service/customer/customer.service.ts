import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(    
    private http: HttpClient
  ) { }

  // field: id, custName, custSurname, custPhone, custEmail, accountId
  // relation: account
  // ?,[]: booking, car

  getCustomer() {
    return this.http.get('http://localhost:3000/api/customer');
  }

  getCustomerById(id: number) {
    return this.http.get(`http://localhost:3000/api/customer/${id}`);
  }
}
