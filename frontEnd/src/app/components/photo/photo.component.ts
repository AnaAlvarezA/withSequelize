import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {
public url:string;

  @Input() photo:any;
  @Input() selected:any;

  constructor() {
    this.url=GLOBAL.url;
  }

  ngOnInit() {
  }

}
