import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CustomerService} from '../services/customer.service';

@Component({
  selector: 'app-customers',
  imports: [CommonModule],
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.css'
})
export class CustomersComponent implements OnInit {
  customers:any;
  errorMessage!: String;
  constructor(private customerService:CustomerService ) {

  }

  ngOnInit(): void {
    // this.customerService.getCustomers().subscribe({
    //   next:(data)=>{
    //     this.customers=data;
    //   },
    //     error: (err)=>{
    //     this.errorMessage = err.message;
    //   }
    // })
    this.customers = this.customerService.getCustomers();
  }

}
