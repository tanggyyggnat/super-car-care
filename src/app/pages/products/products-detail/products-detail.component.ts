import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import Product from 'src/app/mockup/products.json';


@Component({
  selector: 'app-products-detail',
  templateUrl: './products-detail.component.html',
  styleUrls: ['./products-detail.component.scss']
})
export class ProductsDetailComponent {
  productId: string = '';
  product: any = {};
  products: any[] = [];
  quantity: number = 1;
  responsiveOptions: any[] = [
    {
      breakpoint: '1199px',
      numVisible: 1,
      numScroll: 1
    },
    {
      breakpoint: '991px',
      numVisible: 2,
      numScroll: 1
    },
    {
      breakpoint: '767px',
      numVisible: 1,
      numScroll: 1
    }
  ];


  items: MenuItem[] = [
    {
      label: 'Products List',
      routerLink: '/products',
    },
    {
      label: 'Products Detail',
      styleClass: 'font-bold',
    },
  ];

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.activatedRoute.params.subscribe(params => {
      if (params['id']) {
        this.productId = params['id'];
        this.GetProduct();
        this.getOtherProducts();

      }
    });
  }

  GetProduct() {
    Product.forEach((item: any) => {
      if (item.id === this.productId) {
        this.product = item;
        console.log(this.product);
      }
    });
  }

  getOtherProducts() {
    this.products = [];
    Product.forEach((item: any) => {
      if (item.id !== this.productId) {
        this.products.push(item);
      }
    });
  }

  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  increaseQuantity() {
    this.quantity++;
  }

  addToCart() {
    console.log('Add to cart');
  }

  viewDetail(id: string) {
    this.getOtherProducts();
    this.router.navigate(['products/detail', id]);
  }

  toggleFav() {
    this.product.favorite = !this.product.favorite;
  }
}
