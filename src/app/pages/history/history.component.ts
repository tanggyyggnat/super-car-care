import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import data from 'src/app/mockup/customer.json';
import { BookingService } from 'src/app/service/booking/booking.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  booking: any[] = [];

  constructor(
    private router: Router,
    private bookingService: BookingService
  ) {
  }

  ngOnInit(): void {
    this.getBooking();

  }

  getBooking() {
    this.bookingService
      .getBooking()
      .subscribe((res: any) => {
        this.booking = res;
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
