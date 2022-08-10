import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ConnectableObservable } from 'rxjs';
import { Customer } from 'src/app/models/customer';
import { User } from 'src/app/models/user';
import { CustomerService } from 'src/app/services/customer.service';
import { ResponseService } from 'src/app/services/other/response.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css'],
})
export class CustomerAddComponent implements OnInit {
  @Input() currentUser: User;
  customerAddForm: FormGroup;
  users: User[] = [];
  constructor(
    private formBuilder: FormBuilder,
    private userservice: UserService,
    private customerService: CustomerService,
    private toastrService: ToastrService,
    private responseService:ResponseService
  ) {}

  ngOnInit(): void {
    this.createCustomerAddForm();
    this.getAllUser();
  }

  createCustomerAddForm() {
    this.customerAddForm = this.formBuilder.group({
      customerFullName: ['', ''],
      userId: ['', ''],
      country: ['', ''],
      dateOfBirth: ['', ''],
      nationalityNumber: ['', ''],
    });
  }

  add() {
    if (this.customerAddForm.valid) {
      let customerAddModel = Object.assign({}, this.customerAddForm.value);
      this.customerService.add(customerAddModel)
      this.responseService.show(this.customerService.add(customerAddModel))
    } else {
    }
  }

  getAllUser() {
    this.userservice.getAllUser().subscribe((response) => {
      this.users = response.data;
      console.log(this.users);
    });
  }
}
