import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(
    private http: HttpClient
  ) { }

  // field: id, custId, carId, serviceTypeId, appointmentDateTime, description, stepStatus
  // relation: customer, car, serviceType
  // ?,[]: schedule, payment, process, booking

  getBooking() {
    return this.http.get('http://localhost:3000/api/booking');
  }

  getBookingById(id: number) {
    return this.http.get(`http://localhost:3000/api/booking/${id}`);
  }

  //{ custId, serviceTypeId, appointmentDateTime, description, licensePlate, carBrand }
  createBooking(value: any) {
    return this.http.post(`http://localhost:3000/api/booking/`, value);
  }

  //BE เปลี่ยน status: Cancel และระบบBEจะลบข้อมูลใน schedule, process, payment
  cancelBooking(id: number, stepStatus: string) {
    return this.http.patch(`http://localhost:3000/api/booking/${id}`, stepStatus);
  }

  //search เวลาของหน้า booking เอาไปเช็คว่าวันนี้เวลาไหนว่างบ้่ง
  searchScheduleDateTime(appointmentDateTime: string) {
    return this.http.post(`http://localhost:3000/api/booking/dateTime`, { appointmentDateTime });
  }
}
