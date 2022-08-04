import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Credit } from 'src/app/models/credit';
import { CreditService } from 'src/app/services/credit.service';

@Component({
  selector: 'app-credit',
  templateUrl: './credit.component.html',
  styleUrls: ['./credit.component.css']
})
export class CreditComponent implements OnInit {

  constructor(private creditService:CreditService,private toastrService:ToastrService) { }
  credits:Credit[]=[];
  dataLoaded=false;
  ngOnInit(): void {
    this.getAllCredits();
    
  }

  getAllCredits(){
    this.creditService.getAllCredits().subscribe(response=>{
      this.credits=response.data
      this.dataLoaded=true;
      this.toastrService.info("İşlem Başarıyla gerçekleşti","Kredi Listeleme")
      
    })
  }

}
