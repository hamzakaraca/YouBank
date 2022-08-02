import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'showWillPayCredit'
})
export class ShowWillPayCreditPipe implements PipeTransform {

  transform(value: number, insterestRate:number): number {
    return value+(value*insterestRate);
  }

}
