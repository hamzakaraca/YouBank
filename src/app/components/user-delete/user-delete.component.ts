import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user';
import { ResponseService } from 'src/app/services/other/response.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-delete',
  templateUrl: './user-delete.component.html',
  styleUrls: ['./user-delete.component.css'],
})
export class UserDeleteComponent implements OnInit {
  currentUser: User;
  users: User[] = [];
  constructor(
    private userService: UserService,
    private toastrService: ToastrService,
    private responseService: ResponseService
  ) {}

  ngOnInit(): void {
    this.getAllUser();
  }

  getAllUser() {
    this.userService.getAllUser().subscribe((response) => {
      this.users = response.data;
    });
  }

  deleteUser() {
    this.userService.delete(this.currentUser);
    this.responseService.show(this.userService.delete(this.currentUser));
  }
}
