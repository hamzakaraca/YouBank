import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Account } from 'src/app/models/account';
import { AccountDto } from 'src/app/models/accountDto';
import { Customer } from 'src/app/models/customer';
import { AccountService } from 'src/app/services/account.service';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  customer:Customer;
  account:Account;
  accountDtos:AccountDto[]=[];
  accounts:Account[] =[];
  dataLoaded=false;

  constructor(private accountService:AccountService,private customerService:CustomerService,private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.getAccounts();
    
    
  }

  getAccounts(){
    this.accountService.getAccountFullAtribute().subscribe(response=>{
      this.accountDtos=response.data;
      this.dataLoaded=true;
      console.log(response)
      this.toastrService.show(response.message,"Hesap Görüntüleme")
    })
    
  }

  getCustomer(customerId:number){
    this.customerService.getCustomer(customerId).subscribe(response=>{
      this.customer=response.data;
    })
  }
  setAccount(){
    
  }

  deleteById(accountid:number){
    this.accountService.deleteById(accountid).subscribe(response=>{
      
    })
  }

  refresh(){
    window.location.reload();
  }

  update(){
    // this.accountService.update()
  }

  
  
}
