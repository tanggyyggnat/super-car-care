import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Product from 'src/app/mockup/products.json';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  listProducts = Product

  constructor(
    private router: Router
  ) { }

  viewDetail(id: string) {
    this.router.navigate(['products/detail', id]);
  }

  toggleFav() {
  }
}
