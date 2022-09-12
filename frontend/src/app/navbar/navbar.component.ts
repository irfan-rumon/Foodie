import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CartapiService } from '../cartapi.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input()  numCartProducts: number;

  constructor(private router:Router, private cartApi: CartapiService) { }

  ngOnInit(): void {
    this.numCartProducts = this.cartApi.getNumCartProducts();
    console.log(this.numCartProducts);
  }

  onCartNavigator(){
     this.router.navigate(['/carts']);
  }

  onHomeNavigator(){
    this.router.navigate(['']);
  }
}
