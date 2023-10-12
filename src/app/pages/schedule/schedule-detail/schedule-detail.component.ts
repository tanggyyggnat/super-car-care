import { Component } from '@angular/core';

interface processSteps {
  steps: string;
}

@Component({
  selector: 'app-schedule-detail',
  templateUrl: './schedule-detail.component.html',
  styleUrls: ['./schedule-detail.component.scss']
})
export class ScheduleDetailComponent {

  products = [
    { name: 'Check In', steps: 'complete', date: '15/10/2020', time: '10:30', description: 'Examine the vehicle’s exterior, interior, and undercarriage for any visible issues.' },
    { name: 'Visual Inspection', steps: 'in process', date: '15/10/2020', time: '10:30', description: 'Examine the vehicle’s exterior, interior, and undercarriage for any visible issues.' },
    { name: 'Exterior Check', steps: 'complete', date: '15/10/2020', time: '14:00', description: 'Inspect lights, tires, brakes, and other external components.' },
    { name: 'Test Drive', steps: 'complete', date: '15/10/2020', time: '16:15', description: 'Conduct a road test to evaluate handling, acceleration, and braking.' },
    { name: 'Check Out', steps: 'in process', date: '16/10/2020', time: '10:00', description: 'Inspect lights, tires, brakes, and other external components.' }
  ];

  washing = [
    { name: 'Exterior Wash', price: 200 },
    { name: 'Interior Clean', price: 300 },
    { name: 'Engine Bay Detailing', price: 500 },
    // Add more items as needed
  ];

  //---------------- Stock Dialog --------------- //
  stockvisible: boolean = false;
  showStock() {
    this.stockvisible = true;
  }
  onStockCheckboxChange(index: number) {
    if (!this.stockCheckBox[index]) {
      this.value[index] = 0;
    }
  }
  stockCheckBox: boolean[] = new Array(this.washing.length).fill(false);
  //Stock Dialog
  //---------------- Stock Dialog --------------- //

  //------------- SubService Dialog ------------- //
  subservicevisible: boolean = false;
  showSubService() {
    this.subservicevisible = true;
  }
  onSubServiceCheckboxChange(index: number) {
    if (!this.subServiceCheckBox[index]) {
      this.value[index] = 0;
    }
  }
  subServiceCheckBox: boolean[] = new Array(this.washing.length).fill(false);
  //------------- SubService Dialog ------------- //
  //
  // -------------- Process Dialog -------------- //
  processVisible: boolean = false;
  showProcess() {
    this.processVisible = true;
  }
  // onSubServiceCheckboxChange(index: number) {
  //   if (!this.subServiceCheckBox[index]) {
  //     this.value[index] = 0;
  //   }
  // }
  // subServiceCheckBox: boolean[] = new Array(this.washing.length).fill(false);
  // -------------- Process Dialog -------------- //
  value: number[] = new Array(this.washing.length).fill(0);



  optionsSteps: processSteps[] | undefined;
  selectedSteps: processSteps[] | undefined;
  selectedDate: Date | undefined;
  selectedTime: any | undefined;

  ngOnInit() {
    this.optionsSteps = [
      { steps: 'Waiting' },
      { steps: 'In process' },
      { steps: 'Complete' },
    ];
  }

}
