import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-accounts',
  imports: [],
  templateUrl: './accounts.component.html',
  styleUrl: './accounts.component.css'
})
export class AccountsComponent implements OnInit {
    accountFormGroup!: FormGroup;

    constructor(private fb: FormBuilder) {
    }

  ngOnInit(): void {
    this.accountFormGroup = this.fb.group({
      accountId: ['', Validators.required],
    })
    }

}
