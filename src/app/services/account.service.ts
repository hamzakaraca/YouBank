import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { Account } from '../models/account';
import { ListResponseModel } from '../models/listResponseModel';
import { Observable } from 'rxjs';
import { AccountDto } from '../models/accountDto';
import { ResponseModel } from '../models/responseModel';
import { AccountAddModel } from '../models/accountAddModel';
import { AccountUpdateModel } from '../models/accountUpdateModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Token } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  
  constructor(private httpClient:HttpClient) { }
  apiUrl="https://localhost:44347/api/"

  getAccounts():Observable<ListResponseModel<Account>>{
    let newPath=this.apiUrl+"account/getall"
    return this.httpClient.get<ListResponseModel<Account>>(newPath)
  }

  showMoney(customerId:number):Observable<ResponseModel>{
    let newPath=this.apiUrl+"account/showmoney?id="+customerId
    return this.httpClient.get<ResponseModel>(newPath)
  }

  getAccountFullAtribute():Observable<ListResponseModel<AccountDto>>{
    let newPath=this.apiUrl+"account/getaccountfullattribute"
    return this.httpClient.get<ListResponseModel<AccountDto>>(newPath)
  }

  add(accountAddModel:AccountAddModel):Observable<ResponseModel>{
    let newPath=this.apiUrl+"account/add"
    return this.httpClient.post<ResponseModel>(newPath,accountAddModel)
  }

  deleteById(accountid:number):Observable<ResponseModel>{
    let newPath=this.apiUrl+"account/deletebyid?id="+accountid
    return this.httpClient.post<ResponseModel>(newPath,accountid)
    
  }

  update(accountUpdateModel:AccountUpdateModel):Observable<ResponseModel>{
    let newPath=this.apiUrl+"account/update"
    return this.httpClient.post<ResponseModel>(newPath,accountUpdateModel)
  }


  getById(id:number):Observable<SingleResponseModel<Account>>{
    let newPath=this.apiUrl+"account/getbyid?id="+id
    return this.httpClient.get<SingleResponseModel<Account>>(newPath)
  }

  getByAccountNumber(accountNumber:number):Observable<ListResponseModel<Account>>
  {
    let newPath=this.apiUrl+"account/getbyaccountnumber?accountnumber="+accountNumber
    return this.httpClient.get<ListResponseModel<Account>>(newPath)
  }
  addMoney(moneyAddModel):Observable<ResponseModel>{
    let newPath=this.apiUrl+"account/addmoney"
    return this.httpClient.post<ResponseModel>(newPath,moneyAddModel)
  }

  dropMoney(moneyDropModel):Observable<SingleResponseModel<number>>{
    let newPath=this.apiUrl+"account/dropmoney"
    return this.httpClient.post<SingleResponseModel<number>>(newPath,moneyDropModel)
  }

  withDrawAllMoney(id){
    let newPath=this.apiUrl+"account/withdrawallmoney?id="+id;
    this.httpClient.get<ResponseModel>(newPath).subscribe(response=>{
      console.log(response.success)
    },errorRespose => console.log(errorRespose))
  }

  checkMaxMoney(moneyDropModel){
    let newPath=this.apiUrl+"account/checkmaxmoney";
    return this.httpClient.post<ResponseModel>(newPath,moneyDropModel);
  }
}
