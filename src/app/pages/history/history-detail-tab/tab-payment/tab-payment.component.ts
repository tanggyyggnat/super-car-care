import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PrimeNGModule } from 'src/app/modules/primeng.module';

@Component({
  selector: 'tab-payment',
  templateUrl: './tab-payment.component.html',
  styleUrls: ['./tab-payment.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    PrimeNGModule,
  ]
})
export class TabPaymentComponent {

  value: number | undefined;
  mobilebankingMethod = false;
  cashMethod = false;

  constructor() {
    console.log(this.cashMethod)
    console.log(this.mobilebankingMethod)
  }

  selected(method: string) {
    if (method === 'CASH') {
      this.cashMethod = true;
      this.mobilebankingMethod = false;
    } else if (method === 'BANKING') {
      this.cashMethod = false;
      this.mobilebankingMethod = true;
    }
  }
}
