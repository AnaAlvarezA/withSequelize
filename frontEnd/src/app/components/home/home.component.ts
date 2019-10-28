import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public photos:any[];

  constructor(private _servicePhotos:PhotosService) { }

  ngOnInit() {
    this.getPhotos();
  }

getPhotos(){
  this._servicePhotos.getPhotos()
  .then(response=>{
    this.photos=response.photos;
    console.log(this.photos);
  })
  .catch(error=>{
    console.log(error);
  })
}

}
