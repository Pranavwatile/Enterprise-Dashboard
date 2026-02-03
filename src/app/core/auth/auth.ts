import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private readonly _isLoggedIn = signal(false);

  isLoggedIn = this._isLoggedIn.asReadonly();

  login(username : string, password: string): boolean {
    if(username && password){
      this._isLoggedIn.set(true);
      return true;
    }
    else{
      return false;
    }
  }

  logout():void {
    this._isLoggedIn.set(false);
  }
  
}
