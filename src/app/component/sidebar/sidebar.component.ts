import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { PrimeNGModule } from 'src/app/modules/primeng.module';

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
  items: MenuItem[] | undefined;

  constructor(
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.getMenu();
  }

  getMenu() {
    let user = JSON.parse(localStorage.getItem('user')!);
    if (user.role == 'CUSTOMER') {
      this.items = [
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
              routerLink: ['/employee'],
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
