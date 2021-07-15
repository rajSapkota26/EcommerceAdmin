import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginData = {
    username: '',
    password: ''
  };
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  userLogin() {

    if (this.loginData.username.trim() == '' || this.loginData.username == null) {
      return;
    }
    if (this.loginData.password.trim() == '' || this.loginData.password == null) {
      return;
    }
    this.router.navigate(['admin']);


  }
}

