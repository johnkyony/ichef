import { Component, OnInit } from '@angular/core';
// import {AuthService} from '../../services/user/auth.service'
import {LoadingController , AlertController} from '@ionic/angular'
import {FormBuilder , FormGroup , Validators} from '@angular/forms'
import {Router} from '@angular/router'
import { AuthService } from '../services/user/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  public signupForm: FormGroup
  public loading: any
  constructor(
    // private authService: AuthService
  ) { }

  ngOnInit() {
  }

}
