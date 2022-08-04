import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { SingleResponseModel } from 'src/app/models/singleResponseModel';
import { User } from 'src/app/models/user';
import { TimerService } from 'src/app/services/other/timer.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() currentUser
  constructor(private userService:UserService,private toastrService:ToastrService,private timerService:TimerService) { }
  users:User[]=[]
  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.userService.getAllUser().subscribe(response=>{
      this.users=response.data;
      this.toastrService.success(response.message)
    },errorResponse=>{
      this.toastrService.error(errorResponse.message)
    });
  }
  deleteUser(currentUser){
    this.userService.delete(currentUser).subscribe(response=>{
      this.toastrService.success(response.message)
    },errorResponse=>{
      this.toastrService.success(errorResponse.message)
    })
  }


  refresh(){
    window.location.reload();
  }

  wait(){
    this.timerService.wait(this.refresh,3000)
  }
}
