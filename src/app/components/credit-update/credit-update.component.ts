import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Credit } from 'src/app/models/credit';
import { CreditService } from 'src/app/services/credit.service';

@Component({
  selector: 'app-credit-update',
  templateUrl: './credit-update.component.html',
  styleUrls: ['./credit-update.component.css']
})
export class CreditUpdateComponent implements OnInit {
  @Input() currentCredit:Credit 
  creditUpdateForm:FormGroup
  constructor(private formBuilder:FormBuilder,private creditService:CreditService,private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.createCreditUpdateForm();
  }

  createCreditUpdateForm(){
    this.creditUpdateForm=this.formBuilder.group({
      quantityOfCredit:[this.currentCredit.quantityOfCredit,""],
      interestRate:[this.currentCredit.interestRate,""],
      finishDateOfCredit:[this.currentCredit.finishDateOfCredit,""]
    })
  }

  update(){
    if(this.creditUpdateForm.valid){
      let accountUpdateModel= Object.assign({id:this.currentCredit.id,customerId:this.currentCredit.customerId},this.creditUpdateForm.value)
      console.log(accountUpdateModel)
      this.creditService.update(accountUpdateModel).subscribe(response=>{
        this.toastrService.success("İşlem Başarılı","Kredi Güncelleme")
      },responseError=>{
        console.log(responseError)
        if(responseError.error.errors.length>0){
          for (let i = 0; i < responseError.error.errors.length; i++) {
            
            this.toastrService.error(responseError)
          }
          
        }
        
      })
      
    }else{
      this.toastrService.error("Form eksik veya hatalı")
    }
     
    
  }

  refresh(){
    window.location.reload();
  }
}
