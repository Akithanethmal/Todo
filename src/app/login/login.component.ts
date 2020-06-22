import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = '';
  password = '';
  invalidLogin = false;
  errorMessege = 'Login error';
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  handleLogin() {
    // console.log(this.username);
    // console.log(this.password);
    if (this.username === "akitha" && this.password == '123') {
      this.router.navigate(['welcome',this.username])
      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
    }
  }

}
