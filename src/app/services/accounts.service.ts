import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AccountDetails} from '../model/accounts.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {
  backendHost="http://localhost:8086";
  constructor(private http: HttpClient) { }

  public getAccount(accountId: string,page:number,size:number):Observable<AccountDetails>{
    return this.http.get<AccountDetails>(this.backendHost+"/accounts/"+accountId+"pageOperations?page="+page+"&size="+size);
  }


}
