import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceTypeService {

  constructor(
    private http:HttpClient
  ) { }

  // field: id, serviceTypeName
  // relation:
  // ?,[]: subService, booking

  getServiceType() {
    return this.http.get('http://localhost:3000/api/serviceType');
  }

  getServiceTypeById(id: number) {
    return this.http.get(`http://localhost:3000/api/serviceType/${id}`);
  }

  //{ serviceTypeName }
  createServiceType(serviceTypeName: string) {
    return this.http.post('http://localhost:3000/api/serviceType', serviceTypeName)
  }
}
