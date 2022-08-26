import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AccountDto } from 'src/app/models/accountDto';
import { AccountService } from 'src/app/services/account.service';
import { ResponseService } from 'src/app/services/other/response.service';
import { TimerService } from 'src/app/services/other/timer.service';

@Component({
  selector: 'app-money-drop',
  templateUrl: './money-drop.component.html',
  styleUrls: ['./money-drop.component.css'],
})
export class MoneyDropComponent implements OnInit {
  @Input() id: number;
  accountDtos: AccountDto[] = [];
  moneyDropForm: FormGroup;
  constructor(
    private accountService: AccountService,
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private responseService: ResponseService,
    private timerService:TimerService,
  ) {}

  ngOnInit(): void {
    this.createMoneydropForm();
    this.getAllAccount();
  }

  createMoneydropForm() {
    this.moneyDropForm = this.formBuilder.group({
      money: ['', '']
    });
  }

  dropMoney(moneyDropModel) {
      this.accountService.dropMoney(moneyDropModel).subscribe(
        (response) => {
          this.toastrService.success(response.message+response.data+" "+"miktarını çektiniz.");
        },
        (errorResponse) => this.responseService.errorResponse(errorResponse)
      );
  }

  withDrawAllMoney(id: number) {
    this.accountService.withDrawAllMoney(id);
  }
  
  checkMaxMoney() {
    if (this.moneyDropForm.valid) {
      let moneyDropModel = Object.assign({id:this.id}, this.moneyDropForm.value);
      this.accountService.checkMaxMoney(moneyDropModel).subscribe(response=>{
        this.dropMoney(moneyDropModel);
      },errorResult=>{
        if (confirm('Hesabınızdaki miktardan yüksek bir miktar girdiniz, tüm para çekilsin mi ?'))
          this.withDrawAllMoney(moneyDropModel.id);
      })
    }
  }

  getAllAccount() {
    this.accountService.getAccountFullAtribute().subscribe(
      (response) => {
        this.accountDtos = response.data;
      },
      (errorResponse) => {
        this.responseService.errorResponse(errorResponse);
      }
    );
  }

  pageReload(){
    window.location.reload();
  }

  refresh(){
    this.timerService.wait(this.pageReload,3000)
  }
}
