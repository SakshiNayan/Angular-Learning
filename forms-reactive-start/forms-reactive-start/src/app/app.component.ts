import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  genders = ['male', 'female'];
  signUpForm : FormGroup;

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      'userData' : new FormGroup({
        'username': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      }),
      'gender': new FormControl('female')
    }); //we need to pass jS object
  }

  onSubmit(){
    console.log(this.signUpForm)
  }
}
