import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  items: MenuItem[] | undefined;

  ngOnInit(): void {
    this.items = [
      {
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
            label: 'Progress',
            icon: 'pi pi-file',
            routerLink: ['/progress'],
          },
          {
            label: 'History',
            icon: 'pi pi-history',
            routerLink: ['/history'],
          },
          {
            label: 'Payment',
            icon: 'pi pi-dollar',
            routerLink: ['/payment'],
          },
        ],
      },

      // {
      //   items: [
      //     {
      //       label: 'Home',
      //       icon: 'pi pi-home',
      //       routerLink: ['/menu'],
      //     },
      //     {
      //       label: 'Schedule',
      //       icon: 'pi pi-calendar',
      //       routerLink: ['/schedule'],
      //     },
      //     {
      //       label: 'Inventory',
      //       icon: 'pi pi-inbox',
      //       routerLink: ['/inventory'],
      //     },
      //     {
      //       label: 'Reservation',
      //       icon: 'pi pi-ticket',
      //       routerLink: ['/reservation'],
      //     },
      //   ],
      // },
    ];
  }

  signOut() {
    // Add Sign Out Function
  }
}
