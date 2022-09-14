import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/product';
import { Router } from '@angular/router';
import { ProductapiService } from 'src/app/productapi.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  product: Product;
  productId: number; 

  constructor(private productApi:ProductapiService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    let id: any =   this.route.snapshot.paramMap.get('id') ;
    this.productId = parseInt( id );
    this.productApi.getProduct( this.productId).subscribe( (product)=>{
        this.product = product;  
    } )
  }

  onSubmit(){
    this.productApi.editProduct(this.productId, this.product).subscribe();
    this.router.navigate(['/admin/products']);
  }

}
