import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { LayoutComponent } from './layout.component';
import {TableComponent} from '@app/dashboard/table.component';
//import { RegisterComponent } from './register.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  declarations: [
    LayoutComponent,
    TableComponent
    //RegisterComponent
  ]
})
export class DashboardModule { }
