import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Customer } from 'src/app/models/customer';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css']
})
export class CustomerAddComponent implements OnInit {
  customerAddForm:FormGroup
  constructor(private formBuilder:FormBuilder,private customerService:CustomerService,private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.createCustomerAddForm();
  }

  createCustomerAddForm(){
    this.customerAddForm=this.formBuilder.group({
      customerFullName:["",""],
      country:["",""],
      dateOfBirth:["",""],
      nationalityNumber:["",""]
    })
  }

  add(){
    if(this.customerAddForm.valid){
      let accountAddModel= Object.assign({},this.customerAddForm.value)
      this.customerService.add(accountAddModel).subscribe(response=>{
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
}
