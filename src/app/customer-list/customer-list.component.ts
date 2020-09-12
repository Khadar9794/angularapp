import { Component, OnInit } from '@angular/core';
import { Customer } from '../model/customer';

@Component({
  selector: 'customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent {

  constructor() { }

  customers:Customer[]=[
    new Customer("basha",2000),
    new Customer("harsha",3000),
    new Customer("tharun",4000)
  ];
}
