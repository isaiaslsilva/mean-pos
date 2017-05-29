import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'fd-map-container',
  templateUrl: './map-container.component.html',
  styleUrls: ['./map-container.component.css']
})
export class MapContainerComponent implements OnInit {

  @Input('lat') latitude;
  @Input('lon') longitude;

  constructor() { }

  ngOnInit() {
  }

}
