import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminFooterComponent } from './admin-footer/admin-footer.component';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { AddProductsComponent } from './add-products/add-products.component';
import { FormsModule } from '@angular/forms';
import { EditProductComponent } from './edit-product/edit-product.component';
import { OrderComponent } from './order/order.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';



@NgModule({
  declarations: [
    AdminDashboardComponent,
    AdminFooterComponent,
    AdminProductsComponent,
    AddProductsComponent,
    EditProductComponent,
    OrderComponent,
    AdminNavbarComponent,
   
   
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule
  ]
  
})
export class AdminModule { }
