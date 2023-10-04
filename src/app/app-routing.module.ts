import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { BookingComponent } from './pages/booking/booking.component';
import { TicketComponent } from './pages/ticket/ticket.component';
import { HistoryComponent } from './pages/history/history.component';
import { ScheduleComponent } from './pages/schedule/schedule.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'signin',
    component: SigninComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'booking',
    component: BookingComponent,
  },
  {
    path: 'ticket',
    component: TicketComponent,
  },
  {
    path: 'history',
    component: HistoryComponent,
  },
  {
    path: 'schedule',
    component: ScheduleComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
