import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';


import swal from 'sweetalert2';
import { Login } from 'src/app/models/Login';
import { Router } from '@angular/router';
import { Token } from 'src/app/models/Token';
import Swal from 'sweetalert2';

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
    let token = sessionStorage.getItem("logado")
    if(token=="true"){
      this.router.navigate(['relatorio/comensais'])
    }
  }

  //metodo de login

  
  loginUsuario() {

    if(this.login.username=="admin@gmail.com" && this.login.password=="123456"){
      sessionStorage.setItem("logado", "true")
      window.location.href="relatorio/comensais"
      this.router.navigate(['relatorio/comensais']);
    }
    /*try {
      this.loginService.login(this.login).subscribe(res => {
        this.token.Authorization = res.body.Authorization;
        //salvando token na sessao
        sessionStorage.setItem("token", this.token.Authorization);
        this.router.navigate(['/pages/inicio']);
      },
      error => {
        Swal.fire(
          'Error!',
          'Não foi posivel realizar a operação.',
          'error'
        )
      });
    } catch (e) {
      console.log(e);
    }*/
  }
}
