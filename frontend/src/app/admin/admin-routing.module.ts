import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminProductsComponent } from './admin-products/admin-products.component';

const routes: Routes = [
   {path: '', component: AdminDashboardComponent,
    //canActivate: [AuthGuard],
    children: [
      {  path: 'products', component: AdminProductsComponent} 
    ]
  
       
  
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
