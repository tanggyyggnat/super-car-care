import { Component } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent {
  data: any;options: any;
  data2: any; options2: any;
  data3: any; options3: any;


  ngOnInit() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    this.data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'car washing',
          backgroundColor: 'rgba(117,154,234,0.5)',
          borderColor: '#93a7e1',
          hoverBackgroundColor: 'rgb(117,154,234)',
          data: [65, 59, 80, 81, 56, 55, 40]
        },
        {
          label: 'car maintenance',
          backgroundColor: 'rgba(183,200,236,0.5)',
          borderColor: '#445b9f',
          hoverBackgroundColor: 'rgba(102,135,204,0.8)',
          data: [38, 32, 12, 40, 51, 27, 32]
        },
        {
          label: 'car check up',
          backgroundColor: 'rgba(79,116,196,0.5)',
          borderColor: '#445b9f',
          hoverBackgroundColor: 'rgb(78,96,133, 0.8)',
          data: [28, 48, 40, 19, 86, 27, 90]
        }
      ]
    };

    this.options = {
      maintainAspectRatio: false,
      aspectRatio: 0.8,
      plugins: {
        legend: {
          labels: {
            color: textColor
          }
        }
      },
      scales: {
        x: {
          ticks: {
            color: textColorSecondary,
            font: {
              weight: 500
            }
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false
          }
        },
        y: {
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false
          }
        }

      }
    };

    this.data2 = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          type: 'bar',
          label: 'Dataset 1',
          backgroundColor: 'rgba(170,220,234,0.5)',
          hoverBackgroundColor: 'rgba(171,208,225,0.87)',
          data: [360000, 130000, 350000, 335000, 355000, 345000, 140000, 370000, 325000, 160000]
        },
        {
          type: 'bar',
          label: 'Dataset 2',
          backgroundColor: 'rgba(107,179,182,0.5)',
          hoverBackgroundColor: 'rgba(89,148,173,0.63)',
          data: [380000, 385000, 170000, 375000, 260000, 290000, 395000, 100000, 205000, 110000]
        },
        {
          type: 'bar',
          label: 'Dataset 3',
          backgroundColor: 'rgba(243,188,234,0.5)',
          hoverBackgroundColor: 'rgba(199,159,203,0.69)',
          data: [220000, 230000, 115000, 125000, 235000, 110000, 140400, 150000, 220400, 130000]
        }
      ]
    };

    this.options2 = {
      maintainAspectRatio: false,
      aspectRatio: 0.8,
      plugins: {
        tooltips: {
          mode: 'index',
          intersect: false
        },
        legend: {
          labels: {
            color: textColor
          }
        }
      },
      scales: {
        x: {
          stacked: true,
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false
          }
        },
        y: {
          stacked: true,
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false
          }
        }
      }
    };


    this.data3 = {
      labels: ['car washing','car maintenance', 'car check up'],
      datasets: [
        {
          data: [540, 325, 702],
          backgroundColor: [
            'rgba(117,158,234,0.5)',
            'rgba(146,234,117,0.5)',
            'rgba(236,139,87,0.5)',
          ],
          hoverBackgroundColor: [
            'rgba(117,154,234,0.5)',
            'rgba(117,154,234,0.5)',
            'rgba(117,154,234,0.5)',
          ],
        }
      ]
    };

    this.options3 = {
      plugins: {
        legend: {
          display: false,
          labels: {
            usePointStyle: true,
            color: textColor
          }
        }
      }
    };
  }

  printPage() {

    window.print();

  }
}
