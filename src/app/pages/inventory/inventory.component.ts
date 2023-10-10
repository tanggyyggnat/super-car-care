import { Component } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { InventoryService } from 'src/app/service/inventory/inventory.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent {
  listInventory: any[] = [];
  selectInventory: any = {}
  searchValue: string = '';

  //---------------- Stock Dialog --------------- //
  updateVisible: boolean = false;
  addVisible: boolean = false;

  //---------------- add product Dialog --------------- //
  newProductName: string = '';
  newProductQuantity: number = 0;

  constructor(
    private messageService: MessageService,
    private inventoryService: InventoryService
  ) {
    this.getInventory();
  }

  getInventory() {
    this.inventoryService.getInventory().subscribe((res: any) => {
      this.listInventory = res;
    })
  }

  setAddVisibleToTrue() {
    this.addVisible = true;
  }

  selectedItem(value: any) {
    this.selectInventory = value;
    this.updateVisible = true;
  }

  addItem() {
    this.inventoryService.addInventory(this.newProductName, this.newProductQuantity)
      .subscribe((res: any) => {
        this.messageService.add({
          severity: 'success',
          summary: 'สำเร็จ',
          detail: 'เพิ่มข้อมูลสำเร็จ'
        });
      });
    this.getInventory();
    this.addVisible = false;
  }

  updateInventory() {
    this.inventoryService.editInventory(this.selectInventory).subscribe((res: any) => {
      this.messageService.add({
        severity: 'success',
        summary: 'สำเร็จ',
        detail: 'แก้ไขข้อมูลสำเร็จ'
      });
      this.getInventory();
      this.updateVisible = false;
    });
  }

  searchInventory() {
  // TODO: ค้นหาข้อมูล
  }
}
