import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { emailValidator } from '../validators/email-validator';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  userForm: FormGroup = this.fb.group({
    mail: ['', [Validators.required, emailValidator]],
  })

  ngOnInit(): void {
  }
  onSubmit() {

  }

  get getMail(){
    return this.userForm.controls['mail']
  }

}
