import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { PhotosService } from '../../services/photos.service';
import { AuthService } from '../../services/auth.service';
import { UploadService } from 'src/app/services/upload.service';

@Component({
  selector: 'app-edit-photo',
  templateUrl: './edit-photo.component.html',
  styleUrls: ['./edit-photo.component.css']
})
export class EditPhotoComponent implements OnInit {
public photo:any={};

public token:string;
public url:string;

  constructor(
    private _route:ActivatedRoute,
    private _servicePhotos:PhotosService,
    private _auth:AuthService,
    private _upload:UploadService,
    private _router:Router
  ) {
    this.token=this._auth.getToken();
    this.url=GLOBAL.url;
  }

  ngOnInit() {
    this.getPhoto();
  }

  getPhoto(){
    this._route.params.forEach((params:Params)=>{
this._servicePhotos.getPhotosByIde(params['id'])
.then(response=>{
  this.photo=response.photo;
  this.image_selected=response.photo.image;
})
.catch(error=>{
  console.log(error);
})
    })
  }

  editar(){

this._servicePhotos.update(this.photo.id,this.photo,this.token)
.then(response=>{

  if(this.filesToUpload){
    this._upload.upload(this.url + 'upload-photo/' + response.photo.id,this.filesToUpload, this.token)
  .then(photos=>{
this._router.navigate(['/admin/list']);

    })
    .catch(error=>{
      this._router.navigate(['/admin/list']);
      console.log(error);
    });
  }

})
.catch(error=>{
  console.log(error);
});
  }

  public filesToUpload:Array<File>;
  fileChangeEvent(fileInput:any){
this.filesToUpload=fileInput.target.files.length>0?<Array<File>>fileInput.target.files:null;
this.image_selected=this.filesToUpload?fileInput.target.files[0].name:'';
  }
