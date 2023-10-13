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

  @Input() booking: any;

  step: MenuItem[] = [
    {
      title: '',
      label: 'Check In',
    },
    {
      title: '',
      label: 'Process',
    },
    {
      title: '',
      label: 'Payment',
    },
    {
      title: '',
      label: 'Check Out',
    }
  ];

  @Output() OnchangeIndex = new EventEmitter<number>();
  changeIndex(index: number) {
    this.OnchangeIndex.emit(index);
  }
}
