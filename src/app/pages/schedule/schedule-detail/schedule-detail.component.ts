import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService, MenuItem, MessageService } from 'primeng/api';
import { BookingService } from 'src/app/service/booking/booking.service';
import { BookingStockService } from 'src/app/service/bookingStock/booking-stock.service';
import { InventoryService } from 'src/app/service/inventory/inventory.service';
import { PaymentService } from 'src/app/service/payment/payment.service';
import { ProcessService } from 'src/app/service/process/process.service';
import { SubserviceService } from 'src/app/service/subservice/subservice.service';

@Component({
  selector: 'app-schedule-detail',
  templateUrl: './schedule-detail.component.html',
  styleUrls: ['./schedule-detail.component.scss']
})
export class ScheduleDetailComponent implements OnInit {

  // For visible dialog
  stockvisible: boolean = false;
  subservicevisible: boolean = false;
  processVisible: boolean = false;
  showAlert: boolean = false;

  // Data
  scheduleId: string = '';
  bookingId: string = '';
  booking: any = {};
  totalPrice: number = 0;

  // for List
  listStock: any = [];
  listSubService: any = [];
  listProcess: any = [];
  listBookingStock: any = [];
  listStockUsed: any = [];
  listBookingStockUsed: any = [];

  // For Update
  selectedProcessId: string = '';
  selectedSteps: string = '';

  items: MenuItem[] = [
    {
      label: 'Schedule',
      routerLink: '/schedule',
    },
    {
      label: 'Reservation Detail',
      styleClass: 'font-bold',
    },
  ];

  optionsSteps: any[] = [
    { label: 'Waiting', value: 'WAITING' },
    { label: 'In process', value: 'IN_PROCESS' },
    { label: 'Complete', value: 'COMPLETE' },
  ];

  constructor(
    private router: Router,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private activatedRoute: ActivatedRoute,
    private bookingService: BookingService,
    private inventoryService: InventoryService,
    private subserviceService: SubserviceService,
    private processService: ProcessService,
    private bookingStockService: BookingStockService,
    private paymentService: PaymentService
  ) {
    this.activatedRoute.params.subscribe(params => {
      if (params['id']) {
        this.bookingId = params['id'];
        this.getBooking();
      }
    });
  }

  ngOnInit() {
    this.getSubService();
    this.getStock();
  }

  showStock() {
    this.stockvisible = true;
  }

  showSubService() {
    this.subservicevisible = true;
  }

  showProcess(id: string) {
    this.processVisible = true;
    this.selectedProcessId = id;
  }

  getStock() {
    this.inventoryService.getInventory().subscribe(res => {
      this.listStock = res;
      for (let i = 0; i < this.listStock.length; i++) {
        this.listStockUsed.push({
          id: this.listStock[i].id,
          selected: false,
          quantity: 0,
        });
      }
    });
  }

  getSubService() {
    this.subserviceService.getSubservice().subscribe(res => {
      this.listSubService = res;
      for (let i = 0; i < this.listSubService.length; i++) {
        this.listBookingStockUsed.push({
          id: this.listSubService[i].id,
          selected: false,
        });

        this.listProcess.forEach((element: any) => {
          if (element.subServiceId === this.listSubService[i].id) {
            this.listBookingStockUsed[i].selected = true;
          }
        });
      }
    });
  }

  getBooking() {
    this.bookingService
      .getBookingById(parseInt(this.bookingId))
      .subscribe(res => {
        this.listProcess = [];
        this.listBookingStock = [];
        this.totalPrice = 0;

        this.booking = res;
        console.log(this.booking);
        this.listProcess = this.booking.process;
        this.listBookingStock = this.booking.bookingStock.length ? this.booking.bookingStock : [];
        this.listProcess.forEach((element: any) => {
          console.log(element);
          this.totalPrice += element.subService.price;
        });
      });
  }

  onInputValueChange(event: any, index: number) {
    if (event.value > 0) {
      this.listStockUsed[index].quantity = event.value;
      this.listStockUsed[index].selected = true;
    }
  }

  addInventory() {
    let value: any = [];
    this.listStockUsed.forEach((element: any, index: number) => {
      if (element.selected === true) {
        value.push({
          id: this.listStock[index].id,
          quantity: element.quantity,
        });
      }
    });

    this.bookingStockService
      .createBookingStock(parseInt(this.bookingId), value)
      .subscribe({
        next: res => {
          this.stockvisible = false;
          this.showMessage('success', 'Success', 'Add Inventory Successfully');
          setTimeout(() => {
            this.getBooking();
            this.getStock();
          }, 200);
        },
        error: err => {
          this.showMessage('error', 'Error', err.error.error);
        }
      });
  }

  addSubService() {
    let value: any = [];
    this.listBookingStockUsed.forEach((element: any, index: number) => {
      if (element.selected) {
        value.push({
          bookingId: parseInt(this.bookingId),
          subserviceId: this.listSubService[index].id,
        });
      }
    });

    this.processService
      .createProcess(value)
      .subscribe({
        next: res => {
          this.subservicevisible = false;
          this.showMessage('success', 'Success', 'Add Sub-Service Successfully');
          setTimeout(() => {
            this.getBooking();
            this.getSubService();

          }, 200);
        },
        error: err => {
          this.showMessage('error', 'Error', err.error.error);
        }
      });
  }

  deleteStock(id: number) {
    this.confirmationService.confirm({
      header: 'Delete Stock',
      message: 'Are you sure that you want to delete this stock?',
      acceptLabel: 'Delete',
      acceptButtonStyleClass: 'p-button-danger',
      rejectLabel: 'Cancel',
      accept: () => {
        this.bookingStockService
          .deleteBookingStock(id)
          .subscribe(res => {
            this.showMessage('success', 'Success', 'Delete stock successfully');
            this.getBooking();
            this.getStock();
          });
      },
    });
  }

  deleteProcess(id: number) {
    this.confirmationService.confirm({
      header: 'Delete Process',
      message: 'Are you sure that you want to delete this process?',
      acceptLabel: 'Delete',
      acceptButtonStyleClass: 'p-button-danger',
      rejectLabel: 'Cancel',
      accept: () => {
        this.processService.deleteProcess(id).subscribe({
          next: res => {
            this.showMessage('success', 'Success', 'Delete process successfully');
            this.getBooking();
          },
          error: err => {
            this.showMessage('error', 'Error', err.error.error);
          }
        });
      }
    });
  }

  updateProcess() {
    this.processService
      .updateProcess(parseInt(this.selectedProcessId), this.selectedSteps)
      .subscribe({
        next: res => {
          this.showMessage('success', 'Success', 'Update process successfully');
          this.processVisible = false;
          this.getBooking();
        },
        error: err => {
          this.showMessage('error', 'Error', err.error.error);
        }
      });
  }

  submit() {
    this.showAlert = false;
    this.listProcess.forEach((element: any) => {
      if (element.stepStatus !== 'COMPLETE') {
        this.showAlert = true;
      }
    });

    if (this.showAlert) {
      this.showMessage('error', 'Error', 'Please complete all process');
      return;
    }

    this.confirmationService.confirm({
      header: 'Finish Process',
      message: 'Are you sure that you want to finish process?',
      acceptLabel: 'Okay',
      acceptButtonStyleClass: 'p-button-success',
      rejectLabel: 'Cancel',
      accept: () => {
        this.paymentService
          .updatePrice(parseInt(this.booking.payment.id), this.totalPrice)
          .subscribe({
            next: res => {
              this.showMessage('success', 'Success', 'Update status successfully');
              this.router.navigate(['/schedule']);
            }
          });
      }
    });

  }

  showMessage(severity: string, summary: string, detail: string) {
    this.messageService.add({
      severity: severity,
      summary: summary,
      detail: detail,
    });
  }
}
