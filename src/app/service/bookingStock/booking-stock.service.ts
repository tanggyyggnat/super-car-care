import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookingStockService {

  constructor(
    private http: HttpClient
  ) { }

  // field: bookingId, stockId, usageDate, quantityUsage
  // relation: booking, stock
  // ?,[]: 

  //{ bookingId, stockId, quantityUsage }
  createBookingStock(bookingId: number, stockId: number, quantityUsage: number){
    return  this.http.post(`http://localhost:3000/api/bookingStock/`, { bookingId, stockId, quantityUsage });
  }

  getBookingStock() {
    return this.http.get('http://localhost:3000/api/bookingStock');
  }

  getBookingStockById(id: number) {
    return this.http.get(`http://localhost:3000/api/bookingStock/${id}`);
  }
}
