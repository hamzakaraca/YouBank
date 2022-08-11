import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Subscriber } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ResponseService {
  constructor(private toastrService: ToastrService) {}
  
  errorResponse(errorResponse: any) {
    this.errorResultResponse(errorResponse)
    this.standardExceptionResponse(errorResponse)
    this.validationExceptionResponse(errorResponse)
  }

  private errorResultResponse(errorResponse: any) {
    if (errorResponse.error.message) this.toastrService.error(errorResponse.error.message)
  }

  private standardExceptionResponse(errorResponse: any){
    if (errorResponse.error.Message) this.toastrService.error(errorResponse.error.Message)
  }

  private validationExceptionResponse(errorResponse: any) {
    if (errorResponse.error.ValidationErrors) {
      for (let i = 0; i < errorResponse.error.ValidationErrors.length; i++)
        this.toastrService.error(errorResponse.error.ValidationErrors[i].ErrorMessage);
    }
  }
}
