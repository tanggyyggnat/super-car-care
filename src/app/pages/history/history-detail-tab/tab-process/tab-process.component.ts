import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { PrimeNGModule } from 'src/app/modules/primeng.module';

@Component({
  selector: 'tab-process',
  templateUrl: './tab-process.component.html',
  styleUrls: ['./tab-process.component.scss'],
  imports: [
    CommonModule,
    PrimeNGModule],
  standalone: true,
})
export class TabProcessComponent {
  listProcess = [];

  private _booking: any;
  public get booking(): any {
    return this._booking;
  }

  @Input()
  public set booking(value: any) {
    this._booking = value;
    this.listProcess = value.process;
    console.log(this.listProcess);
  }

}
