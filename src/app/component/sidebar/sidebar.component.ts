import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { PrimeNGModule } from 'src/app/modules/primeng.module';
import { AccountService } from 'src/app/service/account/account.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  standalone: true,
  imports: [
    PrimeNGModule,
  ]
})
export class SidebarComponent implements OnInit {
  user: any = {};
  customer: any = {};
  items: MenuItem[] | undefined;

  constructor(
    private router: Router,
    private accountService: AccountService,
  ) {
  }

  ngOnInit(): void {
    this.getMenu();
  }

  getMenu() {
    this.user = JSON.parse(localStorage.getItem('user')!);
    if (this.user.role == 'CUSTOMER') {
      this.items = [
        {
          label: 'Products',
          items: [
            {
              label: 'Shopping Products',
              icon: 'pi pi-cart-plus',
              routerLink: ['/products'],
            },
            {
              label: 'My Cart',
              icon: 'pi pi-user',
              routerLink: ['/cart'],
            },
          ],
        },
        {
          label: 'Customer',
          items: [
            {
              label: 'Home',
              icon: 'pi pi-home',
              routerLink: ['/home'],
            },
            {
              label: 'Booking',
              icon: 'pi pi-book',
              routerLink: ['/booking'],
            },
            {
              label: 'History',
              icon: 'pi pi-history',
              routerLink: ['/history'],
            },
          ],
        },
      ]
    }
    else {
      this.items = [
        {
          label: 'Employee',
          items: [
            {
              label: 'Home',
              icon: 'pi pi-home',
              routerLink: ['/home'],
            },
            {
              label: 'Schedule',
              icon: 'pi pi-calendar',
              routerLink: ['/schedule'],
            },
            {
              label: 'Inventory',
              icon: 'pi pi-inbox',
              routerLink: ['/inventory'],
            },
          ],
        },
      ]
    }
  }

  signOut() {
    localStorage.removeItem('user');
    this.router.navigate(["/signin"]);
  }
}
