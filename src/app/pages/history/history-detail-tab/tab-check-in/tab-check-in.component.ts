import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { PrimeNGModule } from 'src/app/modules/primeng.module';

@Component({
  selector: 'tab-check-in',
  templateUrl: './tab-check-in.component.html',
  styleUrls: ['./tab-check-in.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    PrimeNGModule
  ]
})
export class TabCheckInComponent {
  @Input() booking: any;
  user = JSON.parse(localStorage.getItem('user')!);

  getQueue(id: number) {
    return String(id).padStart(6, '0');
  }

}
