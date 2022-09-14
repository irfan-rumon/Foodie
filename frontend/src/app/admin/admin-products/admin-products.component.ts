import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/product';
import { ProductapiService } from 'src/app/productapi.service';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {

  products: Product[] = [];

  constructor(private productApi: ProductapiService, private router: Router) { }

  ngOnInit(): void {
    this.productApi.getProducts().subscribe(  (products)=>{
      this.products = products;
      console.log(products);
    } )
  }

  onDelete(pr:Product){
    this.productApi.deleteProduct(pr).subscribe(  () => (this.products = this.products.filter((p) => p.id !== pr.id)) );//internal array thekei delete
  }

  onEdit(pr:Product){
    this.router.navigate(['admin/products', pr.id, 'edit']);
  }

  onAdd(){
    this.router.navigate(['admin/products/add']);
  }

}