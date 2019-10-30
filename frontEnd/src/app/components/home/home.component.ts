import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GLOBAL } from 'src/app/services/global';
import { ActivatedRoute, Params } from '@angular/router';
import { Animations } from 'src/app/animations/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations:[Animations]

})
export class HomeComponent implements OnInit {

  public photos:any[];
  public url:string;
  public photo_selected:any={};
  public see_more:boolean=false;
  public photo_actual:number=0;
  public direction:string;
  public show_thumbs:boolean=false;

  constructor(
    private _servicePhotos:PhotosService,
    private _route:ActivatedRoute,
    private _router:Router) {
    this.url=GLOBAL.url;
  }

  ngOnInit() {
    this.getPhotos();
  }

getPhotos(){
  this._servicePhotos.getPhotos()
  .then(response=>{
    this.photos=response.photos;
    this._route.params.forEach((params:Params)=>{
      const num=params['num'];
      this.photo_selected.photo=this.photos.find(result=>{
        return result.number==num;
      });
      if(!this.photo_selected.photo){
        this.photo_selected.photo=this.photos[0];
      }
      const next=this.photos.indexOf(this.photo_selected.photo) + 1;
      const prev=this.photos.indexOf(this.photo_selected.photo) - 1;

      this.photo_selected.nextOne=next<this.photos.length?this.photo_selected[next].number:null;
      this.photo_selected.prevOne=prev>=0?this.photo_selected[prev].number:null;

      this.movePhoto(this.photo_selected.photo);
    })
  })
  .catch(error=>{
    console.log(error);
  })
}

movePhoto(photo:any){
  this.show_thumbs=false;
if(photo.number>this.photo_actual){
  this.direction='right';
}else if(photo.number<this.photo_actual){
  this.direction='left';
}
this.photo_actual=photo.number;
this._router.navigate(['/home',this.photo_actual]);
}
}
