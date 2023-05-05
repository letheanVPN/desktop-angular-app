import {Directive, Input} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn} from "@angular/forms";
import {FileSystemService} from "@service/filesystem/file-system.service";
import {CryptService} from "@service/crypt.service";
@Directive({
  selector: '[lthnAvailableUserName]',
  providers: [FileSystemService,{provide: NG_VALIDATORS, useExisting: AvailableUserNameValidatorDirective, multi: true}]
})
export class AvailableUserNameValidatorDirective implements Validator {
  @Input() availableUserName = '';

  constructor(private fs: FileSystemService, private cryptService: CryptService) { }
  validate(control: AbstractControl): ValidationErrors | null {

    return this.fs.isFile('users/' + this.cryptService.sha256Salty(control.value) + '.lthn.key').then((exists) => {
      if(exists.result == true) {
        control.setErrors({exists: true});
        return {exists: true};
      }
      
        control.setErrors(null);
      return null;
    }).catch((exists) => {
      if(exists) {
     //   return {exists: true};
      }
      return null;
    })

    // return this.availableUserName ? this.forbiddenNameValidator(new RegExp(this.availableUserName, 'i'))(control)
    //                           : null;
  }

  forbiddenNameValidator(nameRe: RegExp): ValidatorFn {

    return (control: AbstractControl): ValidationErrors | null => {
      const forbidden = nameRe.test(control.value);
      return forbidden ? {forbiddenName: {value: control.value}} : null;
    };
  }
}
