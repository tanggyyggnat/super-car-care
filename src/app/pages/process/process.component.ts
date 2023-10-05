import { Component } from '@angular/core';


@Component({
  selector: 'app-process',
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.scss']
})
export class ProcessComponent {
  checkInState: 'process' | 'complete';
  processState: 'waiting' | 'process' | 'complete';
  checkOutState: 'waiting' | 'process' | 'complete';
  processDetails = [
    { name: 'Check In',step_status: 'complete' , date: '15/10/2020', time:'10:30' , description: 'Examine the vehicle’s exterior, interior, and undercarriage for any visible issues.' },
    { name: 'Visual Inspection',step_status: 'complete' , date: '15/10/2020', time:'10:30' , description: 'Examine the vehicle’s exterior, interior, and undercarriage for any visible issues.' },
    { name: 'Exterior Check',step_status: 'complete' , date: '15/10/2020', time: '14:00', description: 'Inspect lights, tires, brakes, and other external components.'},
    { name: 'Test Drive',step_status: 'in process' , date: '15/10/2020', time: '16:15', description: 'Conduct a road test to evaluate handling, acceleration, and braking.'},
    // { name: 'Check Out',step_status: 'waiting' , date: '16/10/2020', time: '10:00', description: 'Inspect lights, tires, brakes, and other external components.'}
  ];


  getProcessData(dataName: string): any[] {
    const hasCheckOut = this.processDetails.some(detail => detail.name === 'Check Out');
    const lastProcess = this.processDetails[this.processDetails.length - (hasCheckOut ? 2 : 1)];
    const dataValue = (lastProcess as any)[dataName];

    if (dataValue == null || dataValue === '') {
      if (dataName === 'step_status') {
        return ['waiting'];
      } else if (dataName === 'time') {
        return ['-'];
      }
    }

    return [dataValue];
  }



  getCheckInOutData(name: string, dataName: string): any[] {
    const filteredEntries = this.processDetails.filter(detail => detail.name === name);
    const dataValues = filteredEntries.map(entry => (entry as any)[dataName]);

    if (!dataValues || dataValues.length === 0) {
      if (dataName === 'step_status') {
        return ['waiting'];
      } else if (dataName === 'time') {
        return ['-'];
      }
    }
    return dataValues;
  }










  constructor() {
    if (this.processDetails.some(detail => detail.name === 'Check In' && detail.step_status === 'complete')) {
      this.checkInState = 'complete';
    } else {
      this.checkInState = 'process';
    }

    if (this.checkInState === 'process') {
      this.processState = 'waiting';
    } else if (this.checkInState === 'complete' && this.processDetails.every(detail => detail.name !== 'Check Out')) {
      this.processState = 'process';
    } else if (this.processDetails.some(detail => detail.name === 'Check Out')) {
      this.processState = 'complete';
    } else {
      this.processState = 'waiting';
    }

    if (!this.processDetails.some(detail => detail.name === 'Check Out')) {
      this.checkOutState = 'waiting';
    } else if (this.processDetails.some(detail => detail.name === 'Check Out' && detail.step_status !== 'complete')) {
      this.checkOutState = 'process';
    } else if (this.processDetails.some(detail => detail.name === 'Check Out' && detail.step_status === 'complete')) {
      this.checkOutState = 'complete';
    } else {
      this.checkOutState = 'waiting';
    }


  }


  ID: string = '5001'
  //เดี๋ยวมาใส่เพิ่ม

}
