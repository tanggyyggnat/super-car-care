import { Component, Input } from '@angular/core';
import { PrimeNGModule } from 'src/app/modules/primeng.module';
import { TabCheckInComponent } from './tab-check-in/tab-check-in.component';
import { TabCheckOutComponent } from './tab-check-out/tab-check-out.component';
import { TabPaymentComponent } from './tab-payment/tab-payment.component';
import { TabProcessComponent } from './tab-process/tab-process.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'history-detail-tab',
  templateUrl: './history-detail-tab.component.html',
  styleUrls: ['./history-detail-tab.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    PrimeNGModule,
    TabCheckInComponent,
    TabCheckOutComponent,
    TabPaymentComponent,
    TabProcessComponent,
  ]
})
export class HistoryDetailTabComponent {
  @Input() activeIndex: number = 0;
  @Input() booking: any = {};
}
