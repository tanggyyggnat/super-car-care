import { Component } from '@angular/core';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent {
  products: any[]=[
    {
      booking:"1",
      service:"Car Wash",
      date:"10/1/2023",
      time:"2:34 PM",
      customerName:"Aimakase",
      carbrand:"Honda",
      carLicense:"ai123",
      status:"success"
    },
    {
      booking:"2",
      service:"car maintanance",
      date:"10/2/2023",
      time:"12:34 AM",
      customerName:"Tanggy",
      carbrand:"Toyota",
      carLicense:"tang789",
      status:"in process"
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
