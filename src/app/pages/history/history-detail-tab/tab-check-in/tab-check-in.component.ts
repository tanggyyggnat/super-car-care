import { Component } from '@angular/core';
import { PrimeNGModule } from 'src/app/modules/primeng.module';

@Component({
  selector: 'tab-check-in',
  templateUrl: './tab-check-in.component.html',
  styleUrls: ['./tab-check-in.component.scss'],
  standalone: true,
  imports: [
    PrimeNGModule
  ]
})
export class TabCheckInComponent {

}
