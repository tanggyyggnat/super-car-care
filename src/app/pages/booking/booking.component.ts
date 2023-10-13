import { Component } from '@angular/core';
import { MessageService } from "primeng/api";
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AccountService } from 'src/app/service/account/account.service';
import { ServiceTypeService } from 'src/app/service/serviceType/service-type.service';
import { BookingService } from 'src/app/service/booking/booking.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent {

  showTimeTable: boolean = false;

  user: any = {};
  customer: any = {};
  typeService: any = [];
  listBooking: any = [];
  timeService: any = [];
  showValid: boolean = true;

  formData: FormGroup = new FormGroup({
    custId: new FormControl(null, [Validators.required]),
    custName: new FormControl(null, [Validators.required]),
    custSurname: new FormControl(null, [Validators.required]),
    custEmail: new FormControl(null, [Validators.required]),
    custPhone: new FormControl(null, [Validators.required]),
    licensePlate: new FormControl(null, [Validators.required]),
    carBrand: new FormControl(null, [Validators.required]),
    serviceTypeId: new FormControl(null, [Validators.required]),
    appointmentDateId: new FormControl(null, [Validators.required]),
    appointmentDateTime: new FormControl(null, [Validators.required]),
    description: new FormControl(null, [Validators.required]),
  });

  listTime: any[] = [
    { id: 1, time: "09:00", status: "Available" },
    { id: 2, time: "10:00", status: "Available" },
    { id: 3, time: "11:00", status: "Available" },
    { id: 4, time: "13:00", status: "Available" },
    { id: 5, time: "14:00", status: "Available" },
    { id: 6, time: "15:00", status: "Available" },
  ];

  constructor(
    private router: Router,
    private messageService: MessageService,
    private accountService: AccountService,
    private serviceTypeService: ServiceTypeService,
    private bookingService: BookingService
  ) {
    this.user = JSON.parse(localStorage.getItem('user')!);

    this.formData.controls['appointmentDateTime'].valueChanges.subscribe((value: any) => {
      let year = new Date(value).getFullYear();
      let month = new Date(value).getMonth();
      let day = new Date(value).getDate() + 1;
      let date = new Date(year, month, day).toISOString();
      this.bookingService
        .searchScheduleDateTime(date)
        .subscribe((res: any) => {
          this.showTimeTable = true;
          this.listBooking = res;
          this.getTime();
        });
    });
  }

  ngOnInit() {
    this.getCustomer();
    this.getServiceType();

  }

  getCustomer() {
    this.accountService
      .getAccountById(this.user.id)
      .subscribe((res: any) => {
        this.customer = res.customer;
        this.patchData();
      });
  }

  getServiceType() {
    this.serviceTypeService
      .getServiceType()
      .subscribe((res: any) => {
        this.typeService = [<any>{ serviceTypeName: "-- Select Type of Service --" }, ...res];
      });
  }

  getTime() {
    this.resetlistTimeTable();
    this.resetTimeService();
    this.listBooking.forEach((element: any) => {
      let index = this.listTime.findIndex((time: any) => time.id === element.appointmentDateId);
      this.listTime[index].status = element.stepStatus ? 'Not Available' : 'Available';

      this.timeService = this.timeService.filter((time: any) => {
        return time.value !== this.listTime[index].time;
      });
    });
  }

  resetlistTimeTable() {
    this.listTime.forEach((element: any) => {
      element.status = 'Available';
    });
  }

  resetTimeService() {
    this.timeService = [
      { value: "-- Select Time --" },
      { id: 1, value: "09:00" },
      { id: 2, value: "10:00" },
      { id: 3, value: "11:00" },
      { id: 4, value: "13:00" },
      { id: 5, value: "14:00" },
      { id: 6, value: "15:00" }
    ]
  }

  patchData() {
    this.formData.patchValue({
      custId: this.customer.id,
      custName: this.customer.custName,
      custSurname: this.customer.custSurname,
      custEmail: this.customer.custEmail,
      custPhone: this.customer.custPhone,
    });
  }

  invalid(control: string): boolean {
    let formControl = this.formData.get(control);
    if (formControl) {
      return formControl.invalid
        && (formControl.touched || formControl.dirty);
    }
    return false;
  }

  onRowSelect(event: any) {
    this.formData.controls['appointmentDateId'].setValue(event.data.id);
  }

  booking() {
    let values = this.formData;
    let datForm = this.formData.get('appointmentDateTime')?.value;
    let year = new Date(datForm).getFullYear();
    let month = new Date(datForm).getMonth();
    let day = new Date(datForm).getDate() + 1;
    let date = new Date(year, month, day);
    values.controls['appointmentDateTime'].setValue(date.toISOString());
    this.bookingService
      .createBooking(values.value)
      .subscribe({
        next: (res: any) => {
          this.router.navigate(['/history/detail', res.id]);
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: 'Booking successfully',
          });
        },
        error: (err: any) => {
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: err.error.error,
          });
          if (!values.invalid) {
            this.showValid = false;
            return;
          }
        },
      });
  }
}
