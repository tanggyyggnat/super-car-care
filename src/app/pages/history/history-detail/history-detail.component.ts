import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuItem } from 'primeng/api';
import data from 'src/app/mockup/customer.json';

@Component({
  selector: 'app-history-detail',
  templateUrl: './history-detail.component.html',
  styleUrls: ['./history-detail.component.scss']
})
export class HistoryDetailComponent {
  activeIndex: number = 0;
  customerId: string = '';
  customer: any = {};

  items: MenuItem[] = [
    {
      label: 'Booking List',
      routerLink: '/history',
    },
    {
      label: 'Booking Detail',
      styleClass: 'font-bold',
    },
  ];

  constructor(
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.params.subscribe(params => {
      if (params['id']) {
        this.customerId = params['id'];
        this.getCustomer();
      }
    });
  }

  getCustomer() {
    if (!this.customerId) return;
    data.filter((item: any) => {
      if (item.id == this.customerId) {
        this.customer = item;
      }
    });
  }

  changeIndex(index: number) {
    this.activeIndex = index;
  }
}
