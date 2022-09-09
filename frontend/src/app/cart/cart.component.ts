import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { CartapiService } from '../cartapi.service';
import { Router } from '@angular/router';
import { Payment } from '../payment';
import { PaymentInfoService } from '../payment-info.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartProducts: Product[] = []; 
  payment: Payment;
  

  constructor(private cartApi: CartapiService, private paymentApi: PaymentInfoService, private router:Router) { }

  ngOnInit(): void {
    this.cartApi.getProducts().subscribe(  (products) => {
      this.cartProducts = products;
    } );
    this.paymentApi.getPaymentInfo().subscribe(  (payment)=>{
        this.payment = payment;
    } )
  }


  onProductDelete(product:Product){
     this.cartApi.deleteProduct(product).subscribe();

     let updatedSubTotal = this.payment.subtotal - product.totalPrice;
     let updatedTotal = this.payment.total - product.totalPrice ;
      let updatedPayment:Payment = {
         subtotal : updatedSubTotal,
         shipping: 50,
         total: updatedTotal
      }

      this.cartApi.deleteProduct(product).subscribe();
      this.paymentApi.editPaymentInfo(updatedPayment).subscribe();
      window.location.reload();
  }

  onAddQuantity(product:Product){
      let updatedProduct:Product = {
        id: product.id,
        imageURL: product.imageURL,
        name: product.name,
        unitPrice : product.unitPrice,
        quantity: product.quantity + 1,
        totalPrice : product.totalPrice + product.unitPrice,
        addedToCart: true
      }

     
      let updatedSubTotal = this.payment.subtotal + product.unitPrice;
      let updatedTotal = this.payment.total + product.unitPrice + 50 ;
      let updatedPayment:Payment = {
         subtotal : updatedSubTotal,
         shipping: 50,
         total: updatedTotal
      }

      this.cartApi.editProduct(product.id, updatedProduct).subscribe();
      this.paymentApi.editPaymentInfo(updatedPayment).subscribe();
      window.location.reload();
      
  }

  onMinusQuantity(product:Product){
    if( product.quantity == 0)return;
    let updatedProduct:Product = {
      id: product.id,
      imageURL: product.imageURL,
      name: product.name,
      unitPrice : product.unitPrice,
      quantity: product.quantity - 1,
      totalPrice : product.totalPrice - product.unitPrice,
      addedToCart : true
    }

    let updatedSubTotal = this.payment.subtotal - product.unitPrice;
    let updatedTotal = this.payment.total - product.unitPrice + 50;
    let updatedPayment:Payment = {
       subtotal : updatedSubTotal,
       shipping: 50,
       total: updatedTotal
    }

    this.cartApi.editProduct(product.id, updatedProduct).subscribe();
    this.paymentApi.editPaymentInfo(updatedPayment).subscribe();
    window.location.reload();
  }

}
