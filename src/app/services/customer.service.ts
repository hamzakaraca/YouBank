import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClient:HttpClient) { }
  apiUrl="https://localhost:44347/api/"
  
  getCustomer(customerId:number):Observable<SingleResponseModel<Customer>>{
    let newPath=this.apiUrl+"customer/getbyid?id="+customerId;
    return this.httpClient.get<SingleResponseModel<Customer>>(newPath)
  }

  getAll():Observable<ListResponseModel<Customer>>{
    let newPath=this.apiUrl+"customer/getall"
    return this.httpClient.get<ListResponseModel<Customer>>(newPath)
  }

  add(customerModel:Customer):Observable<ResponseModel>{
    let newPath=this.apiUrl+"customer/add"
    return this.httpClient.post<ResponseModel>(newPath,customerModel)
  }
}
