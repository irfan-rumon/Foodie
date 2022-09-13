import { Component, OnInit } from '@angular/core';
import { CartapiService } from '../cartapi.service';
import { Router } from '@angular/router';
import { Product } from '../product';
import { Payment } from '../payment';
import { PaymentInfoService } from '../payment-info.service';
import { ProductapiService } from '../productapi.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products : Product[] = [];
  payment: Payment;
  cartProducts: Product[] = []; 
  

  constructor(  private paymentApi: PaymentInfoService, private productApi: ProductapiService, private cartApi: CartapiService, private router: Router  ) { }

  ngOnInit(): void {
    this.productApi.getProducts().subscribe(  (products)=>(this.products = products)    );
    
    this.paymentApi.getPaymentInfo().subscribe(  (payment)=>{
      this.payment = payment;
      } ) ;
    
    this.cartApi.getProducts().subscribe(  (products) => {
        this.cartProducts = products;
      } );
   }

 

  addToCart(product:Product){
   
    let flag = false;
    for(let i = 0; i < this.cartProducts.length; i++){
        if(  this.cartProducts[i].name == product.name  ){
           if(this.cartProducts[i].addedToCart == true)flag=true;
        }
    }
    if( flag == true ){
      return;
    }

    let updatedProduct:Product = {
      id: product.id,
      imageURL: product.imageURL,
      name: product.name,
      unitPrice : product.unitPrice,
      quantity: product.quantity + 1,
      totalPrice : product.totalPrice + product.unitPrice,
      addedToCart : true
    }

   
    let updatedSubTotal = this.payment.subtotal + product.unitPrice;
    let updatedTotal = this.payment.total + product.unitPrice ;
    if( this.cartProducts.length == 0){
        updatedTotal += 50;
    }

    let updatedPayment:Payment = {
       subtotal : updatedSubTotal,
       shipping: 50,
       total: updatedTotal
    }

    this.cartApi.addProduct(updatedProduct).subscribe( 
      (product)=>{this.cartProducts.push(updatedProduct)} );//Internal array te push
    this.paymentApi.editPaymentInfo(updatedPayment).subscribe();
   
    
  }


}