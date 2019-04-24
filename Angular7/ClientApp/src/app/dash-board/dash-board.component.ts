import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html'
})

export class DashBoardComponent implements OnInit{
  items: MenuItem[];
  pie1: any;
  pie2: any;
  bar1: any;

  constructor() {
  }

  ngOnInit() {
    this.items = [
      { label: 'Dashboard', icon: 'fas fa-chart-line' }
    ];

    this.pie1 = {
      labels: ['A', 'B', 'C'],
      datasets: [
        {
          data: [300, 50, 100],
          backgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56"
          ],
          hoverBackgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56"
          ]
        }]
    };

    this.pie2 = {
      labels: ['D', 'E', 'F'],
      datasets: [
        {
          data: [300, 150, 40],
          backgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56"
          ],
          hoverBackgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56"
          ]
        }]
    };

    this.bar1 = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Buy',
          backgroundColor: '#42A5F5',
          borderColor: '#1E88E5',
          data: [65, 59, 80, 81, 56, 55, 40]
        },
        {
          label: 'Borrow',
          backgroundColor: '#9CCC65',
          borderColor: '#7CB342',
          data: [28, 48, 40, 19, 86, 27, 90]
        }
      ]
    };
  }
}
