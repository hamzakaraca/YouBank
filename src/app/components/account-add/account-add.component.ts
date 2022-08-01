import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Customer } from 'src/app/models/customer';
import { AccountService } from 'src/app/services/account.service';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-account-add',
  templateUrl: './account-add.component.html',
  styleUrls: ['./account-add.component.css']
})
export class AccountAddComponent implements OnInit {
  accountAddForm:FormGroup
  customers:Customer[]=[];
  constructor(private formBuilder:FormBuilder,private customerService:CustomerService,private accountService:AccountService,private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.createAccountAddForm();
    this.getAllCustomer();
  }

  createAccountAddForm(){
    this.accountAddForm=this.formBuilder.group({
      customerId:["",""],
      accountNumber:["",""]
    })
  }
  add(){
    if(this.accountAddForm.valid){
      let accountAddModel= Object.assign({},this.accountAddForm.value)
      this.accountService.add(accountAddModel).subscribe(response=>{
        console.log("hi")
      },responseError=>{
        if(responseError.error.Errors.length>0){
          for (let i = 0; i < responseError.error.Errors.length; i++) {
            console.log(responseError)
            this.toastrService.error(responseError.error.Errors[i].ErrorMessage,"doğrulama hatası")
            
          }
          
        }
        
      })
      
    }else{
      
    }
     
    
  }

  getAllCustomer(){
    this.customerService.getAll().subscribe(response=>{
      this.customers=response.data
    })
    
  }


}
