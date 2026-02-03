import { Component } from '@angular/core';
import { AuthService } from '../../../core/auth/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class LoginComponent {

  constructor( private auth: AuthService, private router: Router){}

  login(){
    this.auth.login('admin', 'admin');
    this.router.navigate(['/dashboard']);
  }
}
