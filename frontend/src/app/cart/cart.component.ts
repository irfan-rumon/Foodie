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

  products: Product[] = []; 
  payment: Payment;
  

  constructor(private cartApi: CartapiService, private paymentApi: PaymentInfoService, private router:Router) { }

  ngOnInit(): void {
    this.cartApi.getProducts().subscribe(  (products) => {
      this.products = products;
    } );
    this.paymentApi.getPaymentInfo().subscribe(  (payment)=>{
        this.payment = payment;
    } )
  }


  onProductDelete(product:Product){
     this.cartApi.deleteProduct(product).subscribe();
     window.location.reload();
   
  }

  onAddQuantity(product:Product){
      let updatedProduct:Product = {
        id: product.id,
        imageURL: product.imageURL,
        name: product.name,
        unitPrice : product.unitPrice,
        quantity: product.quantity + 1,
        totalPrice : product.totalPrice + product.unitPrice
      }

      this.cartApi.editProduct(product.id, updatedProduct).subscribe();
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
      totalPrice : product.totalPrice - product.unitPrice
    }

    this.cartApi.editProduct(product.id, updatedProduct).subscribe();
    window.location.reload();
  }

}
