import { Component, computed } from '@angular/core';
import { AuthService } from '../../core/auth/auth';
import { Router, RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';
import { profileSignal } from '../../features/settings/setting.store';

@Component({
  selector: 'app-header',
  imports: [NgIf, RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss',
  standalone:true
})
export class Header {

 profile = profileSignal;
 isLoggedIn = computed(()=> !!this.profile());

 logout(){
  localStorage.removeItem('profile');
  this.profile.set(null);
 }
}
