import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CustomerService} from '../services/customer.service';
import {catchError, Observable, throwError} from 'rxjs';
import {Customer} from '../model/customer.model';
import {FormBuilder, FormGroup, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-customers',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.css'
})
export class CustomersComponent implements OnInit {
  customers!:Observable<Array<Customer>>;
  errorMessage!: String;
  searchformGroup: FormGroup | undefined;
  constructor(private customerService:CustomerService,private fb:FormBuilder ) {

  }

  ngOnInit(): void {
    this.searchformGroup=this.fb.group({
      keyword:this.fb.control("")
    });
    this.handleSearchCustomers();
    this.customers = this.customerService.getCustomers().pipe(
      catchError(error => {
        this.errorMessage = error.message
        return throwError(error);
      }),
    );
  }

  handleSearchCustomers() {
    let kw=this.searchformGroup?.value.keyword;
    this.customers=this.customerService.SearchCustomers(kw).pipe(
      catchError(error => {
        this.errorMessage = error.message
        return throwError(error);
      }),
    );
  }

  handleDeleteCustomer(c: Customer) {

  }
}
