import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrimeNGModule } from 'src/app/modules/primeng.module';
import { RouterModule, Routes } from '@angular/router';
import { BookingComponent } from './booking.component';
import { SidebarComponent } from 'src/app/component/sidebar/sidebar.component';

const routes: Routes = [
  {
    path: '',
    component: BookingComponent,
  },
];

@NgModule({
  declarations: [
    BookingComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    PrimeNGModule,
    SidebarComponent,
  ],

})
export class BookingModule { }
