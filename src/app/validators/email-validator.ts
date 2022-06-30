import { AbstractControl, Validators } from "@angular/forms";
import { ValidationErrors } from "@angular/forms";

export function emailValidator(control: AbstractControl): ValidationErrors | null {

  const mailValid = RegExp("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$" )
  const valid = mailValid.test(control.value); // return boolean

  const errors = {
    email : {
      rules: 'votre adresse email n\'est pas valide'
    }
  }
  return !valid ? errors : null;
}
