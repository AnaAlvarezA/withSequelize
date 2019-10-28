import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public user:any{};

  constructor(
    private _serviceLogin:LoginService,
    private _router:Router
  ) { }

  ngOnInit() {
  }

  login(){
    this._serviceLogin.login(this.user)
    .then(response=>{

      this._serviceLogin.login(this.user,true)
    .then(responseToken=>{
      localStorage.setItem('identity_user',JSON.stringify(response.user));
      localStorage.setItem('token',JSON.stringify(responseToken.token));
           this._router.navigate(['admin/list']);
    })
    .catch(error=>{
      console.log(error);
    });
  }

}
