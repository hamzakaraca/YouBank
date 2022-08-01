import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-information',
  templateUrl: './user-information.component.html',
  styleUrls: ['./user-information.component.css']
})
export class UserInformationComponent implements OnInit {
  currentUser:User
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    
    this.getCurrentUser()
  }

  async getCurrentUser(){
    this.currentUser = await this.userService.getCurrentUser();
  }
}
