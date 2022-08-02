import { DecimalPipe } from "@angular/common";

export interface Credit{
    id:number;
    quantityOfCredit:number;
    customerId:number;
    interestRate:number;
    finishDateOfCredit:Date;
}