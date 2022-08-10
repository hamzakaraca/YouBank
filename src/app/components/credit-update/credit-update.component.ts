import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Credit } from 'src/app/models/credit';
import { CreditService } from 'src/app/services/credit.service';
import { ResponseService } from 'src/app/services/other/response.service';
import { TimerService } from 'src/app/services/other/timer.service';

@Component({
  selector: 'app-credit-update',
  templateUrl: './credit-update.component.html',
  styleUrls: ['./credit-update.component.css'],
})
export class CreditUpdateComponent implements OnInit {
  @Input() currentCredit: Credit;
  creditUpdateForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private creditService: CreditService,
    private toastrService: ToastrService,
    private responseService: ResponseService,
    private timerService: TimerService
  ) {}

  ngOnInit(): void {
    this.createCreditUpdateForm();
  }

  createCreditUpdateForm() {
    this.creditUpdateForm = this.formBuilder.group({
      quantityOfCredit: [this.currentCredit.quantityOfCredit, ''],
      interestRate: [this.currentCredit.interestRate, ''],
      finishDateOfCredit: [this.currentCredit.finishDateOfCredit, ''],
    });
  }

  update() {
    if (this.creditUpdateForm.valid) {
      let creditUpdateModel = Object.assign(
        {
          id: this.currentCredit.id,
          customerId: this.currentCredit.customerId,
        },
        this.creditUpdateForm.value
      );
      console.log(creditUpdateModel);
      this.creditService.update(creditUpdateModel);
      this.responseService.show(
        this.creditService.update(creditUpdateModel)
      );
    } else {
      this.toastrService.error('Form eksik veya hatalı');
    }
  }

  pageReload() {
    window.location.reload();
  }

  refresh() {
    this.timerService.wait(this.pageReload, 2000);
  }
}
