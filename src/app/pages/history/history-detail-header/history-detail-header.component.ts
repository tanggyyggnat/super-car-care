import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { PrimeNGModule } from 'src/app/modules/primeng.module';

@Component({
  selector: 'history-detail-header',
  templateUrl: './history-detail-header.component.html',
  styleUrls: ['./history-detail-header.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    PrimeNGModule
  ]
})
export class HistoryDetailHeaderComponent {
  activeIndex: number = 0;

  private _booking: any;
  public get booking(): any {
    return this._booking;
  }
  @Input()
  public set booking(value: any) {
    this._booking = value;
    switch (this._booking.status) {
      case 'IN_PROCESS':
        this.activeIndex = 0;
        break;
      case 'WAITING':
        this.activeIndex = 1;
        break;
      case 'CANCEL':
        this.activeIndex = 2;
        break;
      case 'COMPLETE':
        this.activeIndex = 3;
        break;
      default:
        break;
    }
  }

  step: String[] = [
    'Check In',
    'Process',
    'Payment',
    'Check Out',
  ];

  @Output() OnchangeIndex = new EventEmitter<number>();
  changeIndex(index: number) {
    this.activeIndex = index;
    this.OnchangeIndex.emit(index);
  }
}
