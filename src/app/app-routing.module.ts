import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { BookingComponent } from './pages/booking/booking.component';
import { HistoryComponent } from './pages/history/history.component';
import { TicketComponent } from './pages/ticket/ticket.component';

import { ProcessComponent } from './pages/process/process.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { ReservationComponent } from './pages/reservation/reservation.component';

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
    path: 'history',
    component: HistoryComponent,
  },
  {
    path: 'ticket',
    component: TicketComponent,
  },
  {
    path: 'process',
    component: ProcessComponent,
  },
  {
    path: 'payment',
    component: PaymentComponent,
  },
  {
    path: 'reservation',
    component: ReservationComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
