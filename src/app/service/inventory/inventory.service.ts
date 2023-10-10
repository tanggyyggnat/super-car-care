import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  constructor(
    private http: HttpClient
  ) { }

  getInventory() {
    return this.http.get('http://localhost:3000/api/stock');
  }

  getInventoryByID(inventoryId: string) {
    return this.http.get(`http://localhost:3000/api/stock/${inventoryId}`);
  }

  addInventory(stockName: string, stockQuantity: number) {
    return this.http.post('http://localhost:3000/api/stock', {
      stockName,
      stockQuantity
    });
  }

  editInventory(value: any) {
    return this.http.patch(`http://localhost:3000/api/stock/${value.id}`, value);
  }
}
