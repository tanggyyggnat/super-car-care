import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent {

  constructor(
    private router: Router,
  ) { }

  products: any[] = [
    {
      booking: "1",
      service: "washingcar",
      date: "10/1/2023",
      time: "2:34 AM",
      customerName: "Aimakase",
      carbrand: "chocolate",
      carLicense: "ai123",
      status: "success"
    },
    {
      booking: "2",
      service: "machanic",
      date: "10/2/2023",
      time: "12:34 AM",
      customerName: "Tanggy",
      carbrand: "strawberry",
      carLicense: "tang789",
      status: "in process"
    }
  ];

  getSeverity(status: string): any {
    switch (status) {
      case 'success':
        return 'success';
      case 'in process':
        return 'warning';
    }
  }

  onRowSelect(event: any) {
    this.router.navigate(['history/detail', event.data.booking]);
  }
}
