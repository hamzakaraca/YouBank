import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Credit } from '../models/credit';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class CreditService {
  apiUrl="https://localhost:44347/api/"
  constructor(private httpClient:HttpClient) { }


  getAllCredits():Observable<ListResponseModel<Credit>>{
    let newPath=this.apiUrl+"credit/getall"
    return this.httpClient.get<ListResponseModel<Credit>>(newPath)
  }

  update(creditUpdateModel:Credit):Observable<ResponseModel>{
    let newPath=this.apiUrl+"credit/update"
    return this.httpClient.post<ResponseModel>(newPath,creditUpdateModel)
  }
  
}
