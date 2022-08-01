import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-show-money',
  templateUrl: './show-money.component.html',
  styleUrls: ['./show-money.component.css']
})
export class ShowMoneyComponent implements OnInit {

  constructor(private accountService:AccountService) { }

  ngOnInit(): void {
  }

  showMoney(customerId:number){
    this.accountService.showMoney(customerId).subscribe(rsponse=>{

    })
  }
}
