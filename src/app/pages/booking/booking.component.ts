import { Component } from '@angular/core';


@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent {
  typeService: any[] | undefined;

  selectedService: any | undefined;
  selectedTime: any | undefined;





  date: Date | undefined;

  minDate: Date | undefined;

  maxDate: Date | undefined;




  ngOnInit() {


    this.typeService = [
        { name: 'Car Wash', code: 'CW' },
        { name: 'Car Maintenance', code: 'CM' },
        { name: 'Check Car Condition', code: 'CCC' }
    ];
  }
}
