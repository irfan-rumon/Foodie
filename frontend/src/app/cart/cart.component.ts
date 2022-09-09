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

  constructor(private cartApi: CartapiService, private router:Router) { }

  ngOnInit(): void {
    this.cartApi.getProducts().subscribe(  (products) => {this.products = products} );
    console.log(this.products);
  }

  onProductDelete(product:Product){
     this.cartApi.deleteProduct(product).subscribe();
     window.location.reload();
  }

}
