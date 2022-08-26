import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit {
  ulogin=false;
  constructor(private authService:AuthService) { }
  ngOnInit(): void {
    this.islogin();
    
  }
  
  islogin(){
    if (this.authService.loggedIn()) {
      this.ulogin=true
    }
    

  }
  logOut(){
    this.authService.logout();
  }
  
  isAdmin(){
    return this.authService.isAdmin();
  }
  
}
