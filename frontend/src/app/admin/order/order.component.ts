import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderapiService } from 'src/app/orderapi.service';
import { Order } from 'src/app/order';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  orders: Order[];
  

  constructor(private api: OrderapiService, private router:Router) { }

  ngOnInit(): void {
     this.api.getOrders().subscribe( (orders)=>{
       this.orders = orders;
     })
  }

  onDelete(order:Order){
    this.api.deleteOrder(order).subscribe(  () => (this.orders = this.orders.filter((o) => o.id !== order.id)) );//internal array thekei delete
    this.router.navigate(['/admin/orders']);
  }

}
