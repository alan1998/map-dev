import { Component,NgModule,ViewChild } from '@angular/core';
import { MapCompComponent } from './map-comp/map-comp.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(MapCompComponent) mapView:MapCompComponent;

  title = 'map2';
  onRotate(){
    //Get heading from map 
    let h = this.mapView.getHeading();
  }

  onInitMap(){
    this.mapView.initOnLocation(-1.28,51.7,false);
  }
}
