import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(
    private http:HttpClient
  ) { }

  // field: id, bookingId, amountMoney, paymentMetodm bankingName, accountName, paymentNumber, paymentDate, paymentSlip, stepStatus
  // relation: booking
  // ?,[]: 

  getPayment() {
    return this.http.get('http://localhost:3000/api/payment');
  }

  getPaymentByID(id: number) {
    return this.http.get(`http://localhost:3000/api/payment/${id}`);
  }

  // if (CASH) =>
  //else if (MOBILE_BANKING) => const { bankingName, accountNumber , paymentSlip }
  updatePayment(id: number, paymentMethod: string) {
    return this.http.patch(`http://localhost:3000/api/payment/${id}`, paymentMethod);
  }
}
