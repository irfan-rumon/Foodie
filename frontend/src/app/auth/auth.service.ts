import { Injectable } from '@angular/core';
import { User } from '../user';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  isAdminLogged: boolean = false;

  isAdmin({ username, password }: any): boolean {
    if (username === 'admin' && password === 'admin123') {
       this.isAdminLogged = true;
       return true;
    }
    return false;
  }

  isLoggedIn(){
    return this.isAdminLogged;
  }

}
