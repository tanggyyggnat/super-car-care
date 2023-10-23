import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from 'src/app/component/sidebar/sidebar.component';
import { PrimeNGModule } from 'src/app/modules/primeng.module';
import { ProductsComponent } from './products.component';
import { ProductsDetailComponent } from './products-detail/products-detail.component';
const routes: Routes = [
  {
    path: '',
    component: ProductsComponent,
  },
  {
    path: 'detail/:id',
    component: ProductsDetailComponent,
  },
];


@NgModule({
  declarations: [
    ProductsComponent,
    ProductsDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    PrimeNGModule,
    SidebarComponent,
  ]
})
export class ProductsModule { }
