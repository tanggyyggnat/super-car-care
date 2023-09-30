import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(
    private http: HttpClient
  ) { }

  getCarAll() {
    return this.http.get('http://localhost:3000/api/car');
  }

  getCarByID(id: string) {
    return this.http.get(`http://localhost:3000/api/car/${id}`);
  }

  addCar(data: any) {
    return this.http.post(`http://localhost:3000/api/car/addCar`,data);
  }
}
