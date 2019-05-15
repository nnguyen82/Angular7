import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { DashBoardService } from '../services/dashboard.service';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html'
})

export class DashBoardComponent implements OnInit{
  items: MenuItem[];
  pie1: any;
  pie2: any;
  bar1: any;
  statistics: any = null;

  constructor(public dashboardService: DashBoardService) {
  }

  ngOnInit() {
    this.items = [
      { label: 'Dashboard', icon: 'fas fa-chart-line' }
    ];

    this.dashboardService.GetDashBoard().subscribe(res => {
      this.pie1 = res.Pie1;
      this.pie2 = res.Pie2;
      this.bar1 = res.Bar1;
    }, err => { console.log("Get dashboard error: " + err.message) });


    this.dashboardService.GetRandomStatistics().subscribe(res => {
      console.log("Statistic service start!");
    });
  }
}
