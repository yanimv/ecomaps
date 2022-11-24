import { Component, OnInit } from '@angular/core';
/*import { NavController } from 'ionic-angular';*/
import { FormGroupDirective, ReactiveFormsModule } from '@angular/forms';
import {FormBuilder, FormGroup, Validators, AbstractControl} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username: AbstractControl;
  password: AbstractControl;
  errorMessage: string = null;
  loginForm: FormGroup;

  constructor(
    /*private navCtrl: NavController, 
    private fb: FormBuilder*/
  ) { 
    /*this.loginForm = fb.group({
      'username': ['', Validators.compose([Validators.required])],
      'password': ['', Validators.compose([Validators.required])]
      });
      
      this.username = this.loginForm.controls['username'];
      this.password = this.loginForm.controls['password'];
      }*/
  }

  ngOnInit() {
  }

  

}
