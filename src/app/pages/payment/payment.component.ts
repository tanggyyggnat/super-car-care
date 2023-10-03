import { Component } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent {
  mobilebankingMethod = false;
  cashMethod = false;
  value: number | undefined;

  selected(method: string) {
    if (method === 'cash') {
      this.cashMethod = true;
      this.mobilebankingMethod = false;
    } else if (method === 'mobilebanking') {
      this.cashMethod = false;
      this.mobilebankingMethod = true;
    }
  }

}







