import { Injectable } from '@angular/core';
import { RequestOptions, Headers, Http } from '@angular/http';
import { GLOBAL } from './global';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private url:string;

  constructor(
    private _http:Http;
  ) {
    this.url=GLOBAL.url;
  }

  login(user:any,getToken?:boolean){
    if(getToken){
      user.token=getToken;
    }
    const headers=new Headers({
      'Content-Type':'Application/json'
    });
    const options=new RequestOptions({headers:headers});
    return this._http.pls(this.url + "login",user,options).toPromise()
    .then(res=>res.json());
  }
}
