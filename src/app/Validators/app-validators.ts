import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppValidators {
  constructor(private httpClient: HttpClient) {}

  static mobile(control: AbstractControl): ValidationErrors | null {
    const val = control.value;
    if (val) {
      const regex = /[789][0-9]{9}/;
      const isValid = regex.test(val);
      return isValid ? null : { mobile: 'inValid' };
    }
    return null;
  }

  static forbiddenValues(values: string[]): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const val = control.value;
      if (val) {
        const inValid = values.includes(val);
        return inValid ? null : { mobile: 'inValid' };
      }
      return null;
    };
  }

  unique(control: AbstractControl): Observable<ValidationErrors | null> {
    console.log();
    const val = control.value;
    const url = 'http://locahost:9000/unique/' + val;
    return this.httpClient
      .get<{ unique: boolean }>(url)
      .pipe(
        map((result: { unique: boolean }) =>
          result.unique === true ? null : { unique: 'none' }
        )
      );

  }
}
