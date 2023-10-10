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
      numproduct:1,
      productname:"Tires",
      number:20,
    },
    {
      numproduct:2,
      productname:"Brake pads",
      number:10,
    },
    {
      numproduct:3,
      productname:"Brake pads",
      number:55,
    },
    //ทดสอบ บรรทัดเยอะๆ
    {numproduct:4, productname:"Brake pads", number:55,},
    {numproduct:5, productname:"Brake pads", number:55,},
    {numproduct:6, productname:"Brake pads", number:55,},
    {numproduct:7, productname:"Brake pads", number:55,},
    {numproduct:8, productname:"Brake pads", number:55,},
    {numproduct:9, productname:"Brake pads", number:55,}
  ];
  items: MenuItem[];

  //---------------- Stock Dialog --------------- //
  value1: number = 20;
  updateVisible: boolean = false;
  addVisible: boolean = false;
  selectInventory: any = {}
  //---------------- Stock Dialog --------------- //

  //---------------- add product Dialog --------------- //
  newProductName: string = '';
  newProductQuantity: number = 0;

  constructor(private messageService: MessageService) {
      this.items = [
        {
          label: 'Delete',
          icon: 'pi pi-times',
        },
        {
            label: 'Delete',
            icon: 'pi pi-times',
        }
      ];
  }



  setAddVisibleToTrue() {
    this.addVisible = true;
  }
  addItem() {
    console.log(this.newProductName, this.newProductQuantity)
    let lastID = this.products[this.products.length - 1].numproduct
    this.products.push( {
      numproduct: lastID+1,
      productname: this.newProductName,
      number: this.newProductQuantity,
    })
    this.save('info');
    this.addVisible = false;
  }
  selectedItem(value: any){
    console.log(value)
    this.selectInventory = value;
    this.updateVisible = true;
  }
  deleteItem(value: any) {
    this.products.forEach((item,index)=>{
      if (item == value){
        this.products.splice(index,1)
      }
    })
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Data Deleted' });
  }
  save(severity: string) {
    this.messageService.add({ severity: severity, summary: 'Success', detail: 'Data Saved' });
    this.updateVisible = false;
  }

  update() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Data Updated' });
  }
}
