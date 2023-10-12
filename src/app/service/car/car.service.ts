import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(
    private http: HttpClient
  ) { }

  // field: id, licensePlate, custId, carBrand
  // relation: customer
  // ?,[]: booking

  getCar() {
    return this.http.get('http://localhost:3000/api/car');
  }

  getCarById(id: number) {
    return this.http.get(`http://localhost:3000/api/car/${id}`);
  }

  
}
