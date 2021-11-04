import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './layout.component';
import { TableComponent } from '@app/dashboard/table.component';
import { StatisticsComponent } from '@app/dashboard/statistics.component';

const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    children: [
      { path: 'table', component: TableComponent},
      { path: 'statistics', component: StatisticsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
