import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent {
  products: any[]=[
    {
      id:"1",
      service:"Car Wash",
      date:"10/1/2023",
      time:"2:34 PM",
      customerName:"Aimakase",
      carbrand:"Honda",
      carLicense:"ai123",
      status:"success"
    },
    {
      id:"2",
      service:"car maintanance",
      date:"10/2/2023",
      time:"12:34 AM",
      customerName:"Tanggy",
      carbrand:"Toyota",
      carLicense:"tang789",
      status:"in process"
    },
    {id:"3", service:"car maintanance", date:"10/2/2023", time:"12:34 AM", customerName:"Tanggy", carbrand:"Toyota", carLicense:"tang789", status:"in process"},
    {id:"3", service:"car maintanance", date:"10/2/2023", time:"12:34 AM", customerName:"Tanggy", carbrand:"Toyota", carLicense:"tang789", status:"pending"},
    {id:"3", service:"car maintanance", date:"10/2/2023", time:"12:34 AM", customerName:"Tanggy", carbrand:"Toyota", carLicense:"tang789", status:"in process"},
    {id:"3", service:"car maintanance", date:"10/2/2023", time:"12:34 AM", customerName:"Tanggy", carbrand:"Toyota", carLicense:"tang789", status:"in process"},
    {id:"3", service:"car maintanance", date:"10/2/2023", time:"12:34 AM", customerName:"Tanggy", carbrand:"Toyota", carLicense:"tang789", status:"in process"},
    {id:"3", service:"car maintanance", date:"10/2/2023", time:"12:34 AM", customerName:"Tanggy", carbrand:"Toyota", carLicense:"tang789", status:"in process"},
    {id:"3", service:"car maintanance", date:"10/2/2023", time:"12:34 AM", customerName:"Tanggy", carbrand:"Toyota", carLicense:"tang789", status:"in process"}
  ];

  constructor(
    private router : Router
  ) { }

  getSeverity(status: string):any {
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
    this.router.navigate(['schedule/detail/', event.data.id]);

  }

}
