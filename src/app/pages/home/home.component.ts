import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem, MessageService } from 'primeng/api';
import { CarService } from 'src/app/service/car/car.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  value: string = '';
  listData: any[] = [];
  items: MenuItem[] | undefined;

  constructor(
    private router: Router,
    private messageService: MessageService,
    private carService: CarService
  ) {}

  ngOnInit(): void {
    this.items = [
      {
        items: [
          {
            label: 'Home',
            icon: 'pi pi-home',
            routerLink: ['/menu'],
          },
          {
            label: 'Booking',
            icon: 'pi pi-book',
            routerLink: ['/menu'],
          },
          {
            label: 'Process',
            icon: 'pi pi-file',
            routerLink: ['/pagename'],
          },
          {
            label: 'History',
            icon: 'pi pi-history',
            routerLink: ['/pagename'],
          },
          {
            label: 'Payment',
            icon: 'pi pi-dollar',
            routerLink: ['/pagename'],
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
      //       routerLink: ['/menu'],
      //     },
      //     {
      //       label: 'Inventory',
      //       icon: 'pi pi-inbox',
      //       routerLink: ['/pagename'],
      //     },
      //     {
      //       label: 'Reservation',
      //       icon: 'pi pi-ticket',
      //       routerLink: ['/pagename'],
      //     },
      //   ],
      // },
    ];
  }

  goSignin() {
    // this.router.navigate(["/signin"]);
    this.carService.getCarAll().subscribe((res) => {
      this.listData.push(res);
    });
    console.log('This button is work!');
  }
}
