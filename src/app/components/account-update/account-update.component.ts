import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { TimeoutError } from 'rxjs';
import { Account } from 'src/app/models/account';
import { Customer } from 'src/app/models/customer';
import { AccountService } from 'src/app/services/account.service';
import { CustomerService } from 'src/app/services/customer.service';
import { ResponseService } from 'src/app/services/other/response.service';
import { TimerService } from 'src/app/services/other/timer.service';
import { __assign } from 'tslib';

@Component({
  selector: 'app-account-update',
  templateUrl: './account-update.component.html',
  styleUrls: ['./account-update.component.css'],
})
export class AccountUpdateComponent implements OnInit {
  @Input() id: number;
  currentAccount: Account;
  accountUpdateForm: FormGroup;
  customers: Customer[] = [];
  constructor(
    private formBuilder: FormBuilder,
    private accountService: AccountService,
    private toastrService: ToastrService,
    private customerService: CustomerService,
    private timerService: TimerService,
    private responseService: ResponseService
  ) {}

  ngOnInit(): void {
    this.getById();
    this.getAllCustomer();
  }

  createAccountUpdateForm() {
    this.accountUpdateForm = this.formBuilder.group({
      accountNumber: [this.currentAccount.accountNumber, ''],
      customerId: [this.currentAccount.customerId, ''],
    });
  }

  update() {
    if (this.accountUpdateForm.valid) {
      let accountUpdateModel = Object.assign(
        { id: this.id },
        this.accountUpdateForm.value
      );

      this.accountService.update(accountUpdateModel);
      this.responseService.show(
        this.accountService.update(accountUpdateModel)
      );
    } else {
      this.toastrService.error('Form eksik veya hatalı');
    }
  }

  getAllCustomer() {
    this.customerService.getAll().subscribe((response) => {
      this.customers = response.data;
    });
  }

  getById() {
    this.accountService.getById(this.id).subscribe((response) => {
      this.currentAccount = response.data;
      this.createAccountUpdateForm();
    });
  }

  pageReload() {
    window.location.reload();
  }

  refresh(){
    this.timerService.wait(this.pageReload,1000)
  }
}
