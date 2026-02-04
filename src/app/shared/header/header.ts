import { Component } from '@angular/core';
import { AuthService } from '../../core/auth/auth';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [NgIf],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {

  constructor(
    public auth:AuthService,
    public router : Router
  ){}

  logout(){
    this.auth.logout();
    this.router.navigate(['/auth/login']);
  }
}
