import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { DashboardService } from '@app/_services/dashboard.service';

@Component({ templateUrl: 'table.component.html' })
export class TableComponent implements OnInit {
  items = null;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dashboardService: DashboardService
  ) { }

  ngOnInit() {
    this.dashboardService.getTables()
      .pipe(first())
      .subscribe(items => this.items = items);
  }
}
