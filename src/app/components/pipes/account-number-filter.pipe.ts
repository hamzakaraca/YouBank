import { Pipe, PipeTransform } from '@angular/core';
import { filter } from 'rxjs';
import { AccountDto } from 'src/app/models/accountDto';

@Pipe({
  name: 'accountNumberFilter'
})
export class AccountNumberFilterPipe implements PipeTransform {

  transform(value: AccountDto[], filterText:string ): AccountDto[] {
    filterText = filterText?filterText.toLocaleLowerCase():filterText
    return filterText?value.filter(v=>v.accountNumber.toLocaleLowerCase().indexOf(filterText) !== -1):value
  }

}
