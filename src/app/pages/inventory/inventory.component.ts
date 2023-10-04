import { Component } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent {
  products: any[]=[
    {
      numproduct:"001",
      productname:"Tires",
      number:"20",
    },
    {
      numproduct:"002",
      productname:"Brake pads",
      number:"10",
    },
    {
      numproduct:"003",
      productname:"Brake pads",
      number:"55",
    }
  ];
  items: MenuItem[];

  constructor(private messageService: MessageService) {
      this.items = [
          {
              label: 'Update',
              icon: 'pi pi-refresh',
              command: () => {
                  this.update();
              }
          },
          {
              label: 'Delete',
              icon: 'pi pi-times',
              command: () => {
                  this.delete();
              }
          }
      ];
  }

  save(severity: string) {
      this.messageService.add({ severity: severity, summary: 'Success', detail: 'Data Saved' });
  }
  
  update() {
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Data Updated' });
  }

  delete() {
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Data Deleted' });
  }
}
