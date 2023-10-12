import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SubserviceService {

  constructor(
    private http:HttpClient
  ) { }

  // field: id, serviceTypeName
  // relation:
  // ?,[]: subService, booking

  getSubservice() {
    return this.http.get('http://localhost:3000/api/schedule');
  }

  getSubserviceById(id: number) {
    return this.http.get(`http://localhost:3000/api/schedule/${id}`);
  }

  //{ serviceTypeName }
  createSubservice(serviceTypeName: string) {
    return this.http.post('http://localhost:3000/api/serviceType', serviceTypeName)
  }
}
