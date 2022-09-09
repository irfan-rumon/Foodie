import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Payment } from './payment';
import { MatCardLgImage } from '@angular/material/card';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class PaymentInfoService {

  private apiUrl = 'http://localhost:3000/payment';

  constructor(private http: HttpClient) { }

  getPaymentInfo(): Observable<Payment>{
    console.log("entered");
    return this.http.get<Payment>(this.apiUrl);
  }

  editPaymentInfo(payment:Payment): Observable<Payment> {
    return this.http.put<Payment>(this.apiUrl, payment, httpOptions);
  }
}
