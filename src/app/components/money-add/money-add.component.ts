import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Account } from 'src/app/models/account';
import { AccountDto } from 'src/app/models/accountDto';
import { AccountService } from 'src/app/services/account.service';
import { ResponseService } from 'src/app/services/other/response.service';
import { TimerService } from 'src/app/services/other/timer.service';


@Component({
  selector: 'app-money-add',
  templateUrl: './money-add.component.html',
  styleUrls: ['./money-add.component.css']
})
export class MoneyAddComponent implements OnInit {
  quantityOfMoney:number
  @Input() id:number
  accountDtos:AccountDto[]=[]
  moneyAddForm:FormGroup
  constructor(private accountService:AccountService,private timerService:TimerService,private formBuilder:FormBuilder,private toastrService:ToastrService,private responseService:ResponseService) { }

  ngOnInit(): void {
    this.createMoneyAddForm();
    this.getAllAccount();
  }

  createMoneyAddForm(){
    this.moneyAddForm=this.formBuilder.group({
      money:["",""]
    })
  }


  addMoney(){
    if(this.moneyAddForm.valid){
      let moneyAddModel= Object.assign({id:this.id},this.moneyAddForm.value)
      this.accountService.addMoney(moneyAddModel).subscribe(response=>{
        this.toastrService.success(response.message);
        
      },errorResponse => this.responseService.errorResponse(errorResponse))
      
    }else{
      
    }
  }

  pageReload(){
    window.location.reload();
  }

  refresh(){
    this.timerService.wait(this.pageReload,3000)
  }

  getAllAccount(){
    this.accountService.getAccountFullAtribute().subscribe(response=>{
      this.accountDtos=response.data
    },errorResponse=>{
      this.responseService.errorResponse(errorResponse);
    })
  }
}
