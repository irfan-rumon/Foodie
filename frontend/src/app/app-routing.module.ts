import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './auth/login/login.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { NotFoundComponent } from './auth/not-found/not-found.component';

const routes: Routes = [
   {path: '', redirectTo: '/login', pathMatch: 'full'},
   {path: 'products', component: ProductComponent},
   {path: 'carts', component: CartComponent},
   {path: 'login', component: LoginComponent},
   {path: 'forgot-password', component: ForgotPasswordComponent},
   {
       path: 'admin',  loadChildren: () => import('./admin/admin.module').then( (m)=>m.AdminModule) 
   },

   {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
