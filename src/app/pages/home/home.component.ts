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
          { label: 'New', icon: 'pi pi-plus', url: 'https://primeng.org' },
          { label: 'Open', icon: 'pi pi-download', routerLink: ['/menu'] },
          {
            label: 'Recent Files',
            icon: 'pi pi-download',
            routerLink: ['/pagename'],
            queryParams: { recent: 'true' },
          },
        ],
      },
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
