import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { SingleResponseModel } from 'src/app/models/singleResponseModel';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  currentUser:User
  users:User[]=[]
  constructor(private userService:UserService,private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.getAllUser
  }

  getAllUser(){
    this.userService.getAllUser().subscribe(response=>{
      console.log(response.data)
    })
  }

  deleteUser(user:User){
    this.userService.delete(user).subscribe(response=>{
      this.toastrService.success(response.message)
    })
  }

}
