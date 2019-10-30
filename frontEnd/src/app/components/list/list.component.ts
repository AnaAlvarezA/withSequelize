import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../../services/photos.service';
import { AuthService } from '../../services/auth.service';
import { GLOBAL } from 'src/app/services/global';
import { Animations } from '../../animations/animations';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  animations: [Animations]
})
export class ListComponent implements OnInit {
public token:string;
public photos:any[];
public url:string;

  constructor(
    private _servicePhotos: PhotosService,
    private _auth:AuthService
  ) {
    this.token=this._auth.getToken();
    this.url=GLOBAL.url;
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
