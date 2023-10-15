import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScheduleService } from 'src/app/service/schedule/schedule.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {
  user: any = {};
  schedule: any[] = [];

  constructor(
    private router: Router,
    private scheduleService: ScheduleService,
  ) {
    this.user = JSON.parse(localStorage.getItem('user') || '{}');
  }

  ngOnInit(): void {
    this.getSchedule();
  }

  getSchedule() {
    this.scheduleService
      .getSchedule()
      .subscribe((res: any) => {
        this.schedule = []

        res.filter((item: any) => {
          if (item.booking.payment.amountMoney == 0) {
            this.schedule.push(item);
          }
        });
      });
  }

  getSeverity(status: string): any {
    switch (status) {
      case 'success':
        return 'success';
      case 'in process':
        return 'warning';
      case 'pending':
        return 'danger';
    }
  }

  onRowSelect(event: any): void {
    console.log(event);
    this.router.navigate(['schedule/detail/', event.data.bookingId]);
  }
}
