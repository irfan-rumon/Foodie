import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminFooterComponent } from './admin-footer/admin-footer.component';
import { AdminProductsComponent } from './admin-products/admin-products.component';



@NgModule({
  declarations: [
    AdminDashboardComponent,
    AdminHeaderComponent,
    AdminFooterComponent,
    AdminProductsComponent,
   
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
