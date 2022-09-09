import { Component, OnInit } from '@angular/core';
import { Food } from '../food';
import { FoodapiService } from '../foodapi.service';
import { CartapiService } from '../cartapi.service';
import { Router } from '@angular/router';
import { Product } from '../product';


@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {

  foods : Food[] = [];
  addedFoodsToCart: Product[] = [];

  constructor(  private api: FoodapiService, private cartApi: CartapiService, private router: Router  ) { }

  ngOnInit(): void {
     this.api.getFoods().subscribe(  (foods)=>(this.foods = foods)    );
     this.cartApi.getProducts().subscribe(  (products)=>(this.addedFoodsToCart = products)    );
     console.log(this.foods);
     console.log(this.addedFoodsToCart);
    }

  isExistOnCart(food:Food){
    for(let i = 0; i < this.addedFoodsToCart.length; i++){
      if(  this.addedFoodsToCart[i].id == food.id ){
        return true;
      }
    }
    return false;
  }

  getQuantity(id:number): number{
    for(let i = 0; i < this.addedFoodsToCart.length; i++){
      if(  this.addedFoodsToCart[i].id == id ){
          return this.addedFoodsToCart[i].quantity;
      }
    }
    return 0;
  }

  onCart(food:Food){
    let product: Product = {
        id: food.id,
        imageURL: food.imageURL,
        name: food.name,
        unitPrice: food.price,
        quantity: 1,
        totalPrice: 1
    }
    if( this.isExistOnCart(food) ){
      console.log("yesss");
      product.quantity = this.getQuantity(product.id) + 1;  
      product.totalPrice = product.unitPrice * product.quantity;
      console.log(product);
      this.cartApi.editProduct(product.id, product).subscribe();
    }
    else{
      product.totalPrice = product.unitPrice;
      this.cartApi.addProduct( product).subscribe();
    }
    console.log(this.addedFoodsToCart);
    this.router.navigate(  ['/cart']  );
  }
  
}

 
    
