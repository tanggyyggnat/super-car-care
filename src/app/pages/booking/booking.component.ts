import { Component } from '@angular/core';

//Service
import { InventoryService } from 'src/app/service/inventory/inventory.service';
import { MessageService } from "primeng/api";

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent {
  typeService: any[] = [];

  products: any[] = [
    { time: "09:00", status: "ว่าง" },
    { time: "10:00", status: "ไม่ว่าง" },
    { time: "11:00", status: "ว่าง" },
    { time: "13:00", status: "ว่าง" },
    { time: "14:00", status: "ไม่ว่าง" },
    { time: "15:00", status: "ว่าง" },
  ];

  constructor(
    private messageService: MessageService,
  ) {
  }

  getSeverity(status: string): any {
    switch (status) {
      case 'ว่าง':
        return 'success';
      case 'ไม่ว่าง':
        return 'warning';
    }
  }
  ngOnInit() {
  }
}
