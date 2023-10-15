import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  constructor(
    private http: HttpClient
  ) { }

  // field: id, stockName, stockQuantity, 
  // relation: 
  // ?,[]: bookingStock

  getInventory() {
    return this.http.get('http://localhost:3000/api/stock');
  }

  getInventoryByID(id: number) {
    return this.http.get(`http://localhost:3000/api/stock/${id}`);
  }

  //{ stockName, stockQuantity }
  createInventory(stockName: string, stockQuantity: number) {
    return this.http.post('http://localhost:3000/api/stock', {
      stockName,
      stockQuantity
    });
  }

  editInventory(id: any, stockQuantity: number) {
    return this.http.patch(`http://localhost:3000/api/stock/${id}`, { stockQuantity });
  }

  searchStock(stockName: any) {
    return this.http.get(`http://localhost:3000/api/stock/search`, stockName);
  }
}
