import { Component } from '@angular/core';
import { MessageService } from "primeng/api";
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AccountService } from 'src/app/service/account/account.service';
import { ServiceTypeService } from 'src/app/service/serviceType/service-type.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent {
  user: any = {};
  customer: any = {};
  typeService: any = [];
  showValid: boolean = true;

  formData: FormGroup = new FormGroup({
    custId: new FormControl('',[Validators.required]),
    custName: new FormControl('',[Validators.required]),
    custSurname: new FormControl('',[Validators.required]),
    custEmail: new FormControl('',[Validators.required]),
    custPhone: new FormControl('',[Validators.required]),
    licensePlate: new FormControl('',[Validators.required]),
    carBrand: new FormControl('',[Validators.required]),
    serviceTypeId: new FormControl('',[Validators.required]),
    appointmentDateTime: new FormControl(new Date(),[Validators.required]),
    description: new FormControl('',[Validators.required]),
  });

  products: any[] = [
    { time: "09:00", status: "Not available" },
    { time: "10:00", status: "Available" },
    { time: "11:00", status: "Not available" },
    { time: "13:00", status: "Available" },
    { time: "14:00", status: "Available" },
    { time: "15:00", status: "Not available" },
  ];

  constructor(
    private messageService: MessageService,
    private accountService: AccountService,
    private serviceTypeService: ServiceTypeService,
  ) {
    this.user = JSON.parse(localStorage.getItem('user')!);
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

  patchData() {
    this.formData.patchValue({
      custId: this.customer.id,
      custName: this.customer.custName,
      custSurname: this.customer.custSurname,
      custEmail: this.customer.custEmail,
      custPhone: this.customer.custPhone,
    });
  }

  getSeverity(status: string): any {
    switch (status) {
      case 'Available':
        return 'success';
      case 'Not available':
        return 'warning';
    }
  }

  invalid(control: string): boolean {
    let formControl = this.formData.get(control);
    if (formControl) {
      return formControl.invalid
        && (formControl.touched || formControl.dirty);
    }
    return false;
  }

  booking() {
    let values = this.formData.value;
    if (this.formData.invalid) {
      this.showValid = false;
      return;
    }
    console.log(values);
  }

}
