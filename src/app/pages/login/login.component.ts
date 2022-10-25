import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
  AbstractControl,
} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  users = {
    email: 'info@papyrus.com',
    password: '123456'
  }

  form: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  submitted = false;

  constructor(private formBuilder: FormBuilder) {}
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }
  onSubmit() {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    if (this.submitted) {
      if(this.form.value.email == this.users.email && this.form.value.password == this.users.password){
        alert('Logged in successfully');
        window.location.href = '#';
      }
      else{
        alert('Wrong email and password')
      }
    }
    
    console.log(JSON.stringify(this.form.value, null, 2));
  }
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(20),
        ],
      ],
    });

  }
  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }
}
