import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/product';
import { ProductapiService } from 'src/app/productapi.service';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent implements OnInit {

  product: Product = {} as Product;

  constructor(private productApi: ProductapiService, private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.product);
    this.productApi.addProduct(this.product).subscribe();
    this.router.navigate(['/admin/products']);
  }
}
