import { Injectable } from '@angular/core';
import { Order } from './order';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderapiService {

  private apiUrl = 'http://localhost:3000/orders';

  constructor(private http: HttpClient) { }

  getOrders(): Observable<Order[]>{
    return this.http.get<Order[]>(this.apiUrl);
  }

  deleteOrder(order: Order): Observable<Order> {
    const url = `${this.apiUrl}/${order.id}`;
    return this.http.delete<Order>(url);
  }

}
