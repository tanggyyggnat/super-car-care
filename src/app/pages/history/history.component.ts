import { Component } from '@angular/core';
import { Router } from '@angular/router';
import data from 'src/app/mockup/customer.json';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent {

  products: any[] = [];

  constructor(
    private router: Router,
  ) {
    this.products = data
  }


  getSeverity(status: string): any {
    switch (status) {
      case 'success':
        return 'success';
      case 'in process':
        return 'warning';
    }
  }

  onRowSelect(event: any) {
    this.router.navigate(['history/detail', event.data.id]);
  }
}
