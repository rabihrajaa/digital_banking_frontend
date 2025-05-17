import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {AccountsService} from '../services/accounts.service';

@Component({
  selector: 'app-accounts',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './accounts.component.html',
  styleUrl: './accounts.component.css'
})
export class AccountsComponent implements OnInit {
    accountFormGroup!: FormGroup;

    constructor(private fb: FormBuilder,private accountService: AccountsService) {
    }

  ngOnInit(): void {
    this.accountFormGroup = this.fb.group({
      accountId: ['', Validators.required],
    })
    }

  handleSearchAccount() {

  }
}
