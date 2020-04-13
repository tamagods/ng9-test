import { Injectable } from '@angular/core';
import { auth } from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(
    public afAuth: AngularFireAuth
  ) { }

  GoogleAuth() {
    return this.AuthLogin(new auth.GoogleAuthProvider());
  }

  AuthLogin(provider): Promise<any> {
    return this.afAuth.auth.signInWithPopup(provider);
  }

  getAccessToken(): string {
    return localStorage.getItem('accessToken');
  }
}
