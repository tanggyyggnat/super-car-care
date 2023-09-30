import { Component } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent {
  products: any[]=[
    {
      booking:"1",
      Service:"washingcar",	
      Date:"10/1/2023",	
      Time:"2:34 AM",	
      CustomerName:"Aimakase",	
      Carbrand:"chocolate",	
      CarLicense:"ai123",
      Status:"success"						
    },
    {
      booking:"2",
      Service:"machanic",	
      Date:"10/2/2023",	
      Time:"12:34 AM",	
      CustomerName:"Tanggy",	
      Carbrand:"strawberry",	
      CarLicense:"tang789",
      Status:"in process"						
    }
  ];
}
