import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CustomerService} from '../services/customer.service';
import {catchError, Observable, throwError} from 'rxjs';
import {Customer} from '../model/customer.model';

@Component({
  selector: 'app-customers',
  imports: [CommonModule],
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.css'
})
export class CustomersComponent implements OnInit {
  customers!:Observable<Array<Customer>>;
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
    this.customers = this.customerService.getCustomers().pipe(
      catchError(error => {
        this.errorMessage = error.message
        return throwError(error);
      }),
    );
  }

}
