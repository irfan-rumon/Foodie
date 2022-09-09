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

  private apiUrl = 'http://localhost:3000/products';


  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(this.apiUrl);
  }


  getProduct(productId: any): Observable<Product> {
    const url = `${this.apiUrl}/${productId}`;
    return this.http.get<Product>(url);
  }


  addProduct(Product: Product): Observable<Product> {
    console.log("add korte chai");
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