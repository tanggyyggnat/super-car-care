import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import data from 'src/app/mockup/customer.json';
import { BookingService } from 'src/app/service/booking/booking.service';
import { CustomerService } from 'src/app/service/customer/customer.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  booking: any[] = [];
  user: any = {};
  customer: any = {};

  constructor(
    private router: Router,
    private customerService: CustomerService,
    private bookingService: BookingService
  ) {
    this.user = JSON.parse(localStorage.getItem('user')!);
    this.getCustomer();
  }

  ngOnInit(): void {
    this.getBooking();
  }

  getCustomer() {
    this.customerService
      .getCustomerById(this.user.id)
      .subscribe((res: any) => {
        this.customer = res;
      });
  }

  getBooking() {
    this.bookingService
      .getBooking()
      .subscribe((res: any) => {
        this.booking = []

        res.filter((item: any) => {
          if (item.custId == this.customer.id) {
            this.booking.push(item);
          }
        });
      });
  }


  getSeverity(status: string): any {
    switch (status) {
      case 'IN_PROCESS':
        return 'info';
      case 'WAITING':
        return 'warning';
      case 'CANCEL':
        return 'danger';
      case 'COMPLETE':
        return 'success';
    }
  }

  onRowSelect(event: any) {
    this.router.navigate(['history/detail', event.data.id]);
  }
}
