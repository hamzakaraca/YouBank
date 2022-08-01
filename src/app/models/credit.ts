import { DecimalPipe } from "@angular/common";

export interface Credit{
    id:number;
    quantityOfCredit:string;
    customerId:number;
    interestRate:Number;
    finishDateOfCredit:Date;
}