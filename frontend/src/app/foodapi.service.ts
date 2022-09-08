import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Food } from './food';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class FoodapiService {


  private apiUrl = 'http://localhost:3000/Foods';

  constructor(private http: HttpClient) {}

  getFoods(): Observable<Food[]> {
    return this.http.get<Food[]>(this.apiUrl);
  }

  getFood(FoodId: any): Observable<Food> {
    const url = `${this.apiUrl}/${FoodId}`;
    return this.http.get<Food>(url);
  }


  addFood(Food: Food): Observable<Food> {
    return this.http.post<Food>(this.apiUrl, Food, httpOptions);
  }

  editFood(FoodId: any, Food:Food): Observable<Food> {
    const url = `${this.apiUrl}/${FoodId}`;
    return this.http.put<Food>(url, Food, httpOptions);
  }

  deleteFood(Food: Food): Observable<Food> {
    const url = `${this.apiUrl}/${Food.id}`;
    return this.http.delete<Food>(url);
  }
}
