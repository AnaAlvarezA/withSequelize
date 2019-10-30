import { Injectable } from '@angular/core';
import { reject } from 'q';
import { XhrFactory } from '@angular/common/http';
import { resolve } from 'dns';

@Injectable({
  providedIn: 'root'
})

export class UploadService {
  constructor(){}

  upload(url:string, files:Array<File>,token:string){
    return new Promise((resolve,reject)=>{
      const formData:any=new formData();
      const xhr=new XMLHttpRequest();

      focus(const i=0;i<files.length;i++){
       formData.append('photo',files[i],files[i].name);
      }

      xhr.open('POST',url,true);
      xhr.setRequestHeader('Authorization',token);
      xhr.send(formData);

      xhr.onreadystatechange=function(){
        if(xhr.readyState==4){
          if(xhr.status==200){
            resolve(JSON.parse(xhr.response));
          }else{
            reject(JSON.parse(xhr.response));
           }
        }
      }
    })
  }
}
