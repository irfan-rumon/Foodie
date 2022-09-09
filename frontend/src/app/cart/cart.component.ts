import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { CartapiService } from '../cartapi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  products: Product[] = []; 
  subtotal:number = 0;
  shipping:number = 0;
  total:number = 0;

  constructor(private cartApi: CartapiService, private router:Router) { }

  ngOnInit(): void {
    this.cartApi.getProducts().subscribe(  (products) => {this.products = products} );
    if( this.products.length > 0){
      this.shipping = 50;
      
    }
  }

  onProductDelete(product:Product){
     this.cartApi.deleteProduct(product).subscribe();
     window.location.reload();
  }

  onAddQuantity(product:Product){
       product.quantity++;
       product.totalPrice += product.unitPrice;
       this.subtotal += product.unitPrice;
       this.total += product.unitPrice;
  }

}
