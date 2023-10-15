import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MessageService } from 'primeng/api';
import { UploadEvent } from 'primeng/fileupload';
import { PrimeNGModule } from 'src/app/modules/primeng.module';
import { PaymentService } from 'src/app/service/payment/payment.service';

@Component({
  selector: 'tab-payment',
  templateUrl: './tab-payment.component.html',
  styleUrls: ['./tab-payment.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    PrimeNGModule,
  ]
})
export class TabPaymentComponent {
  @Input() booking: any;
  value: number | undefined;
  mobilebankingMethod = false;
  cashMethod = false;

  fileUpload: any;
  fileName: string = "";

  // For mobile banking
  bankAccount: string = "";
  bankName: string = "";
  paymentMethod: string = "";

  constructor(
    private messageService: MessageService,
    private paymentService: PaymentService
  ) {
  }

  selected(method: string) {
    if (method === 'CASH') {
      this.cashMethod = true;
      this.mobilebankingMethod = false;
      this.paymentMethod = "CASH";
    } else if (method === 'BANKING') {
      this.cashMethod = false;
      this.mobilebankingMethod = true;
      this.paymentMethod = "MOBILE_BANKING";
    }
  }

  onUpload(event: any) {
    this.fileUpload = event.files[0];
    this.fileName = this.fileUpload.objectURL.changingThisBreaksApplicationSecurity;
  }

  openFile() {
    if (this.fileUpload) {
      window.open(this.fileUpload.objectURL.changingThisBreaksApplicationSecurity, '_blank');
    }
  }

  payment() {
    let data = {
      paymentMethod: this.paymentMethod,
      bankingName: this.bankName,
      accountNumber: this.bankAccount,
      paymentSlip: this.fileUpload.objectURL.changingThisBreaksApplicationSecurity
    };
    this.paymentService
      .updatePayment(this.booking.id, data)
      .subscribe({
        next: (res: any) => {
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: 'Payment success'
          });
        },
        error: (err: any) => { 
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: 'Payment failed'
          });
        }
      });
  }
}
