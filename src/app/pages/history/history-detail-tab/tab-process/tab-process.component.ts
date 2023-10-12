import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'tab-process',
  templateUrl: './tab-process.component.html',
  styleUrls: ['./tab-process.component.scss'],
  imports: [CommonModule], // Add this line
  standalone: true,
})
export class TabProcessComponent {
  processDetails = [
    { name: 'Check In',step_status: 'complete' , date: '15/10/2020', time:'10:30' , description: 'Examine the vehicle’s exterior, interior, and undercarriage for any visible issues.' },
    { name: 'Visual Inspection',step_status: 'complete' , date: '15/10/2020', time:'10:30' , description: 'Examine the vehicle’s exterior, interior, and undercarriage for any visible issues.' },
    { name: 'Exterior Check',step_status: 'complete' , date: '15/10/2020', time: '14:00', description: 'Inspect lights, tires, brakes, and other external components.'},
    { name: 'Test Drive',step_status: 'in process' , date: '15/10/2020', time: '16:15', description: 'Conduct a road test to evaluate handling, acceleration, and braking.'},
  ];
}
