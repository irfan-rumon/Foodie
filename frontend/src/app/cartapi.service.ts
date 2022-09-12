import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class CartapiService {

  private apiUrl = 'http://localhost:3000/carts';


  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(this.apiUrl);
  }

  getNumCartProducts(){
    let products: Product[];
    this.getProducts().subscribe( (res)=>{products = res;}  );
    return this.getNumCartProducts.length;
  }

  addProduct(Product: Product): Observable<Product> {
    return this.http.post<Product>(this.apiUrl, Product);
  }

  editProduct(productId: any, Product:Product): Observable<Product> {
    const url = `${this.apiUrl}/${productId}`;
    return this.http.put<Product>(url, Product, httpOptions);
  }

  deleteProduct(Product: Product): Observable<Product> {
    const url = `${this.apiUrl}/${Product.id}`;
    return this.http.delete<Product>(url);
  }
}
