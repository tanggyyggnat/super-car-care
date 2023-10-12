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
  user: any = {};
  userRole: string = '';
  data: any;

  options: any;

  constructor() {
    this.user = JSON.parse(localStorage.getItem('user')!);
    if(this.user) {
      this.userRole = this.user.role;
      console.log(this.userRole);
    }
  }

  ngOnInit() {
    const documentStyle = getComputedStyle(document.documentElement);

    this.data = {
      labels: ['Service usage', 'Get a free service after'],
      datasets: [
        {
          data: [3, 7],
          backgroundColor: [
            '#5bcb82',
            '#babdcb'
          ],
          hoverBackgroundColor: [
            '#3e8c7d',
            '#5F6482'
          ],
          hoverOffset: 2,
        },

      ]
    };

    this.options = {
      plugins: {
        legend: {
          display: false
        },
      },
      cutout: '60%',
    };

  }


}
