import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { CartapiService } from '../cartapi.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  products: Product[] = []; 

  constructor(private cartApi: CartapiService) { }

  ngOnInit(): void {
    this.cartApi.getProducts().subscribe(  (products) => {this.products = products} );
    console.log(this.products);
  }

}
