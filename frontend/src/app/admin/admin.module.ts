import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminFooterComponent } from './admin-footer/admin-footer.component';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { AddProductsComponent } from './add-products/add-products.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AdminDashboardComponent,
    AdminHeaderComponent,
    AdminFooterComponent,
    AdminProductsComponent,
    AddProductsComponent,
   
   
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule
  ]
  
})
export class AdminModule { }
