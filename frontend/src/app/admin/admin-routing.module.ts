import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';
import { AddProductsComponent } from './add-products/add-products.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { EditProductComponent} from './edit-product/edit-product.component';
import { OrderComponent } from './order/order.component';

const routes: Routes = [
   
    //canActivate: [AuthGuard],
      {  path: 'products', component: AdminProductsComponent},
      { path: 'products/add', component: AddProductsComponent},
      { path: 'products/:id/edit', component: EditProductComponent},
      { path: 'orders', component: OrderComponent}
];
  
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
