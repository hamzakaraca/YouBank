import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Subscriber } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ResponseService {
  constructor(private toastrService: ToastrService) {}

  show(method: any) {
    method.subscribe(
      (response) => {
        this.toastrService.success(response.message);
      },
      (responseError) => {
        if (responseError.error.Errors) {
          if (responseError.error.Errors.length > 0) {
            for (let i = 0; i < responseError.error.Errors.length; i++) {
              console.log(responseError);
              this.toastrService.error(
                responseError.error.ValidationErrors[i].ErrorMessage,
                'doğrulama hatası'
              );
            }
          }
        } 

        if (responseError.error.message) {
          console.log(responseError.error.message);
          this.toastrService.error(responseError.error.message);
        }
        else if (responseError.error.Message) {
          console.log(responseError.error.Message);
          this.toastrService.error(responseError.error.Message);
        }
      }
    );
  }
}
