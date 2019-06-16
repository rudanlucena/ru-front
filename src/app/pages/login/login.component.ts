import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';


import swal from 'sweetalert2';
import { Login } from 'src/app/models/Login';
import { Router } from '@angular/router';
import { Token } from 'src/app/models/Token';

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
      },
      error => {
        swal.fire({
          html: `<h3>Não foi possível efetuar o login!</h3>`,
          type: 'error',
          width: 400,
          heightAuto: true,
          confirmButtonColor: '#C1272D'
        })
      });
    } catch (e) {
      console.log(e);
    }
  }
}
