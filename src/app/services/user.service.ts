import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { User } from '../models/user';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl="https://localhost:44347/api/"
  constructor(private httpClient:HttpClient, private authService:AuthService) { }
  
  getAllUser():Observable<ListResponseModel<User>>{
    let newPath=this.apiUrl+"user/getall"
    return this.httpClient.get<ListResponseModel<User>>(newPath)
  }

  delete(user:User):Observable<ResponseModel>{
    let newPath=this.apiUrl+"user/delete"
    return this.httpClient.post<ResponseModel>(newPath,user)
  }

  getById(id:number):Observable<SingleResponseModel<User>>{
    let newPath=this.apiUrl+"user/getbyid?id="+id
    return this.httpClient.get<SingleResponseModel<User>>(newPath)
  }

  async getCurrentUser(){
    let currentUser:User;
    await this.getById(this.authService.getCurrentUserId).toPromise().then(response=>{
      currentUser = response.data
    })
    return currentUser
  }
}
