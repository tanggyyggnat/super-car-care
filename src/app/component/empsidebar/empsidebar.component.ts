import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-empsidebar',
  templateUrl: './empsidebar.component.html',
  styleUrls: ['./empsidebar.component.scss']
})
export class EmpsidebarComponent implements OnInit {
  items: MenuItem[] | undefined;

  constructor(
    private router: Router,
  ) { }

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
            label: 'Process',
            icon: 'pi pi-file',
            routerLink: ['/process'],
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
    ];
  }

  signOut() {
    this.router.navigate(["/signin"]);
  }
}
