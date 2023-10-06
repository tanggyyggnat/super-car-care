import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from 'src/app/component/sidebar/sidebar.component';
import { PrimeNGModule } from 'src/app/modules/primeng.module';
import { HistoryComponent } from './history.component';
import { HistoryDetailComponent } from './history-detail/history-detail.component';

const routes: Routes = [
  {
    path: '',
    component: HistoryComponent,
  },
  {
    path: 'detail/:id',
    component: HistoryDetailComponent,
  },
];


@NgModule({
  declarations: [
    HistoryComponent,
    HistoryDetailComponent
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
export class HistoryModule { }
