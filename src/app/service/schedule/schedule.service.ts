import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  constructor(
    private http:HttpClient
  ) { }

  // field: id, empId, bookingId
  // relation: employee, booking
  // ?,[]: 

  getSchedule() {
    return this.http.get('http://localhost:3000/api/schedule');
  }

  getScheduleById(id: number) {
    return this.http.get(`http://localhost:3000/api/schedule/${id}`);
  }
}
