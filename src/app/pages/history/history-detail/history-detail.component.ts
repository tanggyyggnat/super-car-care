import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConfirmationService, MenuItem, Message, MessageService } from 'primeng/api';
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
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
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

  cancleBooking() {
    this.confirmationService.confirm({
      header: 'Confirmation',
      message: 'Are you sure that you want to cancel this booking?',
      acceptLabel: 'Confirm',
      rejectLabel: 'Cancel',
      accept: () => {
        this.bookingService
          .cancelBooking(this.booking.id, "CANCEL")
          .subscribe((res: any) => {
            this.getCustomer();
            this.messageService.add({
              severity: 'success',
              summary: 'Success',
              detail: 'Booking has been cancelled.',
            });
          });
      },
    });
  }
}
