import { Component } from '@angular/core';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent {
  products: any[]=[
    {
      name:"ai",
      queue:"01",
      licen:"fe-99",
      brand:"Benz",
      date:"09/09/2023",
      time:"09:00",
      description:"Change tire"
    },
    {
      name:"tang",
      queue:"02",
      licen:"ge-675",
      brand:"BMW",
      date:"10/082023",
      time:"08:00",
      description:"wash car"
    }
  ];

  getSeverity(status: string):any {
    switch (status) {
      case 'success':
        return 'success';
      case 'in process':
        return 'warning';
    }
  }
}
