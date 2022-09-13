import { Component, OnInit, Input } from '@angular/core';
import { Payment } from '../payment';

@Component({
  selector: 'app-payment-info',
  templateUrl: './payment-info.component.html',
  styleUrls: ['./payment-info.component.css']
})
export class PaymentInfoComponent implements OnInit {


  @Input() payment: Payment;


  constructor() { }

  ngOnInit(): void {
   
  }

}
