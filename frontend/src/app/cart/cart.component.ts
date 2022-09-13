import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { CartapiService } from '../cartapi.service';
import { Router } from '@angular/router';
import { Payment } from '../payment';
import { PaymentInfoService } from '../payment-info.service';
import { ProductapiService } from '../productapi.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartProducts: Product[] = []; 
  payment: Payment = {} as Payment;
  

  constructor(private cartApi: CartapiService, private paymentApi: PaymentInfoService, private router:Router) { }

  ngOnInit(): void { //main chalenging part, somehow load the data
    this.cartApi.getProducts().subscribe(  (products) => {
      this.cartProducts = products;
    } );
    this.paymentApi.getPaymentInfo().subscribe(  (payment)=>{
        this.payment = payment;
    } )
  }


  onProductDelete(product:Product){
    
     let updatedSubTotal = this.payment.subtotal - product.totalPrice;
     let updatedTotal = this.payment.total - product.totalPrice ;
      let updatedPayment:Payment = {
         subtotal : updatedSubTotal,
         shipping: 50,
         total: updatedTotal
      }

      this.cartApi.deleteProduct(product).subscribe(  () => (this.cartProducts = this.cartProducts.filter((p) => p.id !== product.id)) );//internal array thekei delete
      this.payment.subtotal -= product.totalPrice;
      this.payment.total -= product.totalPrice;
      if( this.cartProducts.length == 0)this.payment.shipping = 0;
    
  }

  onAddQuantity(product:Product){
      
      let foundIndex = this.cartProducts.findIndex(x => x.id == product.id);
      this.cartProducts[foundIndex].quantity++; //internal array change
      this.cartProducts[foundIndex].totalPrice += this.cartProducts[foundIndex].unitPrice;

      this.payment.subtotal += product.unitPrice;
      this.payment.total += product.unitPrice;
      this.payment.shipping = 50;
  }

  onMinusQuantity(product:Product){

    if( product.quantity == 1){
      this.onProductDelete(product);
      return;
    }
   
    let foundIndex = this.cartProducts.findIndex(x => x.id == product.id);
      this.cartProducts[foundIndex].quantity--; //internal array change
      this.cartProducts[foundIndex].totalPrice -= this.cartProducts[foundIndex].unitPrice;

      this.payment.subtotal -= product.unitPrice;
      this.payment.total -= product.unitPrice;
      if( this.cartProducts.length == 0)this.payment.shipping = 0;
      else this.payment.shipping = 50;
  }

}