import { Component } from '@angular/core';

//Service
import { InventoryService } from 'src/app/service/inventory/inventory.service';
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent {
  typeService: any[] | undefined;

  products: any[]=[
    {time:"09:00", status:"ว่าง"},
    {time:"10:00", status:"ไม่ว่าง"},
    {time:"11:00", status:"ว่าง"},
    {time:"13:00", status:"ว่าง"},
    {time:"14:00", status:"ไม่ว่าง"},
    {time:"15:00", status:"ว่าง"},
  ];
  selectedService: any | undefined;
  date: Date | undefined;
  listInventory: any[] = [];
  dateService: any[] | undefined;
  constructor(
    private messageService: MessageService,
    private inventoryService: InventoryService
  )
  {
    this.getInventory();
  }

  getInventory() {
    this.inventoryService.getInventory().subscribe((res: any) => {
      this.listInventory = res;
    })
  }
  getSeverity(status: string):any {
    switch (status) {
      case 'ว่าง':
        return 'success';
      case 'ไม่ว่าง':
        return 'warning';
    }
  }
  ngOnInit() {
    this.typeService = [
        { name: 'Car Wash', code: 'CW' },
        { name: 'Car Maintenance', code: 'CM' },
        { name: 'Check Car Condition', code: 'CCC' }
    ];
  }
}
