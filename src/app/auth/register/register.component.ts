import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registerForm!: FormGroup; 

  constructor( private fb: FormBuilder ){}


  ngOnInit() {
    this.registerForm = this.fb.group({
      nickName: ['', Validators.required ], 
      email:    ['', [Validators.required, Validators.email]],
      password: ['', Validators.required ],
    });
  }

  createAccount() {
    console.log(this.registerForm.valid);
    console.log(this.registerForm.value);
  }

}
