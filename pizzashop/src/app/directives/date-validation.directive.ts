import { HttpClient } from '@angular/common/http';
import { debounceTime } from 'rxjs/operators';
import { Directive, forwardRef } from "@angular/core";
import {
  NG_ASYNC_VALIDATORS,
  Validator,
  AbstractControl
} from "@angular/forms";

import { environment } from '../../environments/environment';

const HOST: string = environment.herokuConfig.host;

@Directive({
  selector: "[datevalidation]",
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      useExisting: forwardRef(() => DateValidationDirective),
      multi: true
    }
  ]
})
export class DateValidationDirective {
  
  constructor(private httpClient: HttpClient) { }

  validate(ctrl) {
    return new Promise((resolve, reject) => {
      this.httpClient.post(`${HOST}/api/validation/dates`, { maxDate: ctrl.value }).pipe(debounceTime(3000)).subscribe(
        res => {
          if(res['valid']) {
            resolve(null)
          } else {
            resolve({dateValidationDirectiveError: {
                message: res['message'],
            }})
          }
        },
        err => {
          resolve({ async: true });
        }
      );
    });
  }
}
