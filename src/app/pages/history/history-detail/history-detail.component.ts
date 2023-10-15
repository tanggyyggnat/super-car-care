import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { BookingService } from 'src/app/service/booking/booking.service';

@Component({
  selector: 'app-history-detail',
  templateUrl: './history-detail.component.html',
  styleUrls: ['./history-detail.component.scss']
})
export class HistoryDetailComponent {
  activeIndex: number = 0;
  customerId: string = '';
  booking: any = {};

  items: MenuItem[] = [
    {
      label: 'Booking List',
      routerLink: '/history',
    },
    {
      label: 'Booking Detail',
      styleClass: 'font-bold',
    },
  ];

  constructor(
    private activatedRoute: ActivatedRoute,
    private bookingService: BookingService
  ) {
    this.activatedRoute.params.subscribe(params => {
      if (params['id']) {
        this.customerId = params['id'];
        this.getCustomer();
      }
    });
  }

  getCustomer() {
    if (!this.customerId) return;
    this.bookingService
      .getBookingById(parseInt(this.customerId))
      .subscribe((res: any) => {
        this.booking = res;
        console.log(this.booking);
      });

  }

  changeIndex(index: number) {
    this.activeIndex = index;
  }
}
