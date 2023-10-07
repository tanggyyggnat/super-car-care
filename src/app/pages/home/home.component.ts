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
  data: any;

  options: any;

  ngOnInit() {
      const documentStyle = getComputedStyle(document.documentElement);
      const textColor = documentStyle.getPropertyValue('--text-color');

      this.data = {
          labels: ['Car Wash','Free'],
          datasets: [
              {
                  data: [9, 1],
                  backgroundColor: [documentStyle.getPropertyValue('--bluegray-500'),  documentStyle.getPropertyValue('--green-500')],
                  hoverBackgroundColor: [documentStyle.getPropertyValue('--bluegray-500'), documentStyle.getPropertyValue('--green-400')]
              }
          ]
      };


      this.options = {
          cutout: '50%',
          plugins: {
              legend: {
                  labels: {
                      color: textColor
                  }
              }
          }
      };
  }
}
