import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { LoginModel } from '../models/loginModel';
import { RegisterModel } from '../models/registerModel';
import { SingleResponseModel } from '../models/singleResponseModel';

import { TokenModel } from '../models/tokenModel';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  jwtHelperService:JwtHelperService = new JwtHelperService();
  apiUrl="https://localhost:44347/api/auth/"
  constructor(private httpClient:HttpClient) { }

  login(loginModel:LoginModel){
    let newPath=this.apiUrl+"login"
    return this.httpClient.post<SingleResponseModel<TokenModel>>(newPath,loginModel)
  }

  isAuthenticated(){
    if (localStorage.getItem("token")) {
      return true;
    }
    else{
      return false;
    }
  }

  register(registerModel:RegisterModel){
    let newPath=this.apiUrl+"register"
    return this.httpClient.post<SingleResponseModel<TokenModel>>(newPath,registerModel)
  }

  get getToken(){
    return localStorage.getItem("token");
  }
  get getDecodedToken(){
    let token = this.getToken;
    return this.jwtHelperService.decodeToken(token)
  }

  get getCurrentUserId() {

    let decodedToken = this.getDecodedToken
    let nameidentifierString = Object.keys(decodedToken).filter(t => t.endsWith("/nameidentifier"))[0]
    let userId: number = decodedToken[nameidentifierString]
    return userId
  }

  

  loggedIn() {
    let token = this.getToken
    return !this.jwtHelperService.isTokenExpired(token);
  }

  isAdmin() {
    console.log(this.loggedIn())
    if (!this.loggedIn()) return false

    let decodedToken = this.getDecodedToken

    let roleString = Object.keys(decodedToken).filter(t => t.endsWith("/role"))[0]

    if (roleString)
      for (let i = 0; i < decodedToken[roleString].length; i++)
        if (decodedToken[roleString][i] === "admin") return true

    return false
  }

  logout() {
    localStorage.removeItem("token")
    window.location.reload()
  }
}