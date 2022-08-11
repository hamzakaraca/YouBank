import { Pipe, PipeTransform } from '@angular/core';
import { AccountDto } from 'src/app/models/accountDto';

@Pipe({
  name: 'accountFullNameFilter'
})
export class AccountFullNameFilterPipe implements PipeTransform {

  transform(value: AccountDto[], filterText: string): AccountDto[] {
    filterText = filterText?filterText.toLocaleLowerCase():filterText
    return filterText?value.filter(v=>v.customerFullName.toLocaleLowerCase().indexOf(filterText) !== -1):value
  }

}
