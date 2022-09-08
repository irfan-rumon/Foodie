import { Component, OnInit } from '@angular/core';
import { Food } from '../food';
import { FoodapiService } from '../foodapi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {

  foods : Food[] = [];

  constructor(  private api: FoodapiService, private router: Router  ) { }

  ngOnInit(): void {
     this.api.getFoods().subscribe(  (foods)=>(this.foods = foods)    );
     console.log(this.foods);
  }

}
