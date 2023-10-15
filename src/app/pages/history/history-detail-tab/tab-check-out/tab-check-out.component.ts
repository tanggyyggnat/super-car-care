import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { PrimeNGModule } from 'src/app/modules/primeng.module';

@Component({
  selector: 'tab-check-out',
  templateUrl: './tab-check-out.component.html',
  styleUrls: ['./tab-check-out.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    PrimeNGModule
  ]
})
export class TabCheckOutComponent {
  @Input() booking: any;


  print() {
    window.print();
  }
}
