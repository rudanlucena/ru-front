import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/models/Login';
import { LoginService } from 'src/app/services/login.service';
import { Token } from 'src/app/models/Token';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public login: Login = new Login();
  public token: Token = new Token();

  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  //metodo de login
  loginUsuario() {
    try {
      this.loginService.login(this.login).subscribe(res => {
        this.token.Authorization = res.body.Authorization;
        //salvando token na sessao
        sessionStorage.setItem("token", this.token.Authorization);
        this.router.navigate(['/pages/inicio']);
      });
    } catch (e) {
      console.log(e);
    }
  }
}
