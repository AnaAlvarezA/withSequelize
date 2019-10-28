import { Injectable } from '@angular/core';
import { GLOBAL } from './global';
import { Http, RequestOptions } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {
  private url:string;

  constructor(private _http:Http) {
    this.url=GLOBAL.url;
  }

  getPhotos(){
    return this._http.get(this.url + 'photos')
    .toPromise().then(res=>res.json());
  }

  getPhotosAdmin(token:string){
    let headers=new Headers({
      'Authorization':token
    });
    const options=new RequestOptions({headers:headers});
    return this._http.get(this.url + 'photos-admin',options)
    .toPromise().then(res=>res.json());
  }
}
