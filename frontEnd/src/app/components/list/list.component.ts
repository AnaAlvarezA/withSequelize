import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../../services/photos.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
public token:string;
public photos:any[]

  constructor(
    private _servicePhotos: PhotosService,
    private _auth:AuthService
  ) {
    this.token=this._auth.getToken();
   }

  ngOnInit() {
    this.getPhotosAdmin();
  }

  getPhotosAdmin(){
    this._servicePhotos.getPhotosAdmin(this.token)
    .then(response=>{
      this.photos=response.photos;
    })
    .cath(error=>{
      console.log(error);
    })
  }
}
