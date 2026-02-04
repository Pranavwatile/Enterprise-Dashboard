import { effect, Injectable, signal } from '@angular/core';

const AUTH_KEY = 'isLoggedIn';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private readonly _isLoggedIn = signal<boolean>(
    localStorage.getItem(AUTH_KEY) === 'true'

  )

  isAuthenticated = this._isLoggedIn.asReadonly();

  constructor(){
    effect(() => {
      localStorage.setItem(AUTH_KEY, String(this._isLoggedIn()));
    });
  }

 login(){

  this._isLoggedIn.set(true);

 }

 logout(){
  this._isLoggedIn.set(false);
 }
  
}
