import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { BookingComponent } from './pages/booking/booking.component';
import { HomeComponent } from './pages/home/home.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { TicketComponent } from './pages/ticket/ticket.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrimeNGModule } from './modules/primeng.module';
import { ConfirmationService, MessageService } from 'primeng/api';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { FooterComponent } from './component/footer/footer.component';
import { HistoryComponent } from './pages/history/history.component';
import { ScheduleComponent } from './pages/schedule/schedule.component';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    BookingComponent,
    HomeComponent,
    ProgressComponent,
    TicketComponent,
    SidebarComponent,
    FooterComponent,
    HistoryComponent,
    ScheduleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PrimeNGModule
  ],
  providers: [
    MessageService,
    ConfirmationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
