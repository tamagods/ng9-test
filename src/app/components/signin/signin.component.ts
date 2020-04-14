import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  constructor(
    public authService: AuthService,
    private router: Router,
    private titleService: Title
  ) { }

  ngOnInit(): void {
    this.setTitle();
    this.clearLocalStorage();
  }

  setTitle() {
    this.titleService.setTitle('DOTA2 Picker - Signin');
  }

  clearLocalStorage() {
    localStorage.clear();
  }

  onSignIn() {
    this.authService.GoogleAuth().then(data => {
      if (data) {
        this.setToken(data);
        this.routerToDashboard();
      }
    });
  }

  setToken(data) {
    localStorage.setItem('accessToken', data.credential.accessToken);
    localStorage.setItem('refreshToken', data.user.refreshToken);
  }

  routerToDashboard() {
    this.router.navigate(['/dashboard']);
  }
}
