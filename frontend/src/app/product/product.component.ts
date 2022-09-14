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
  totalSub: number = 0;
  shipping: number = 0;
  totalTot: number = 0;
  

  constructor(  private paymentApi: PaymentInfoService, private productApi: ProductapiService, private cartApi: CartapiService, private router: Router  ) { }

  ngOnInit(): void {
    this.productApi.getProducts().subscribe(  (products)=>{
      this.products = products;
       console.log(this.products);
    })
   
    
    this.paymentApi.getPaymentInfo().subscribe(  (payment)=>{
      this.payment = payment;
      } ) ;
    
    this.cartApi.getProducts().subscribe(  (products) => {
        this.cartProducts = products;
      } );
   }

   ngOnDestroy():void{
      console.log("hello");
      let updatedPayment:Payment = {
        subtotal : this.totalSub,
        shipping: this.shipping,
        total: this.totalTot
     }
     this.paymentApi.editPaymentInfo(updatedPayment).subscribe(  );
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
    this.totalSub += product.unitPrice;
    this.totalTot += product.unitPrice;
    this.shipping = 50;

    this.cartApi.addProduct(updatedProduct).subscribe( 
      (product)=>{this.cartProducts.push(updatedProduct)} );//Internal array te push
    
  }


}