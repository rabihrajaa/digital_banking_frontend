import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {AccountsService} from '../services/accounts.service';
import {AccountDetails} from '../model/accounts.model';
import {Observable} from 'rxjs';
import {AsyncPipe, DatePipe, DecimalPipe, NgIf} from '@angular/common';

@Component({
  selector: 'app-accounts',
  imports: [
    ReactiveFormsModule,
    NgIf,
    AsyncPipe,
    DecimalPipe,
    DatePipe
  ],
  templateUrl: './accounts.component.html',
  styleUrl: './accounts.component.css'
})
export class AccountsComponent implements OnInit {
    accountFormGroup!: FormGroup;
    currentPage: number=0;
    pageSize: number = 5;
    accountObservable!: Observable<AccountDetails>;

    constructor(private fb: FormBuilder,private accountService: AccountsService) {
    }

  ngOnInit(): void {
    this.accountFormGroup = this.fb.group({
      accountId: ['', Validators.required],
    })
    }

  handleSearchAccount() {
      let accountId: string = this.accountFormGroup.value.accountId;
    this.accountObservable=this.accountService.getAccount(accountId,this.currentPage,this.pageSize)
  }
}
