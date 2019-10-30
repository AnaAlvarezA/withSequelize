import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../../services/photos.service';
import { AuthService } from '../../services/auth.service';
import { UploadService } from '../../services/upload.service';

@Component({
  selector: 'app-new-photo',
  templateUrl: './new-photo.component.html',
  styleUrls: ['./new-photo.component.css']
})
export class NewPhotoComponent implements OnInit {
  public photo:any{};
  public token:string;
  public filesToUpload:Array<File>;
  public image_selected:string;
  public url:string;

  constructor(
    privat _servicePhotos:PhotosService,
    private _auth:AuthService,
    private _upload:UploadService,
    private _router:Router
  ) {
    this.token=this._auth.getToken();
    this.url=GLOBAL.url;
   }

  ngOnInit() {
  }

  agregar({
    this.photo.user_create=this._auth.getIdentity().user;
this._servicePhotos.save(this.photo,this.token)
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
}
