import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from 'src/app/component/sidebar/sidebar.component';
import { PrimeNGModule } from 'src/app/modules/primeng.module';
import { ScheduleComponent } from './schedule.component';
import { ScheduleDetailComponent } from './schedule-detail/schedule-detail.component';

const routes: Routes = [
  {
    path: '',
    component: ScheduleComponent,
  },
  {
    path: 'detail/:id',
    component: ScheduleDetailComponent,
  },
];



@NgModule({
  declarations: [
    ScheduleDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    PrimeNGModule,
    SidebarComponent,
  ]
})
export class ScheduleModule { }
