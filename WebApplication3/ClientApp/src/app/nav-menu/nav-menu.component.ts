import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {
  model: any = {};

  constructor(public authService: AuthService, private router: Router) { }

  ngOnInit() {

  }

  login() {
    console.log('Login function started');
    this.authService.login(this.model).subscribe(next => {
      console.log('Logged in successfully');

    }, error => {
      console.log('Failed to login');
    }, () => {
      this.router.navigate(['/members']);
    });
  }

  loggedIn() {
    const token = localStorage.getItem('token');
    return !!token;
  }

  logOut() {
    localStorage.removeItem('token');
    console.log('logged out');
    this.router.navigate(['/home']);
  }
}
