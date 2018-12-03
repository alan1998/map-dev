import { Component, OnInit,AfterViewInit, ViewChild, NgZone } from '@angular/core';
import {AgmCoreModule , AgmMap, GoogleMapsAPIWrapper, MapsAPILoader,  } from '@agm/core';
import { GoogleMap, Marker, MarkerOptions, MapOptions, InfoWindow, Polyline, LatLngLiteral} from "@agm/core/services/google-maps-types";

import { LatLng } from '@agm/core/services/google-maps-types';

@Component({
  selector: 'app-map-comp',
  templateUrl: './map-comp.component.html',
  styleUrls: ['./map-comp.component.css'],
  host : {class: 'fill-parent'}
})
export class MapCompComponent implements OnInit {
  lat: number = 51.678418;
  lng: number = -1.3;
  bMapInit:boolean = false;
  @ViewChild("theMap") mapViewThe:any;
  public wrap:GoogleMapsAPIWrapper;
  

  constructor(public mapsApiLoader: MapsAPILoader,
      private zone: NgZone,
      /*private wrap: GoogleMapsAPIWrapper*/) {
    this.wrap = new GoogleMapsAPIWrapper(this.mapsApiLoader,this.zone);
   }

  ngOnInit() {
    
  }

  ngAfterViewInit(){
    // this.wrap.createMap(this.mapViewThe.nativeElement,<MapOptions>{
    //   streetViewControl: false,
    //   zoomControl: true,
    //   mapTypeControl: true,
    //   mapTypeId: 'roadmap',
    //   mapTypeControlOptions: {
    //     mapTypeIds: ['hybrid', 'roadmap', 'satellite'],
    //     position: 1
    //   },
    //   center: {
    //     lat: this.lat,
    //     lng: this.lng
    //   },
    //   zoom: 12
    // });
    // this.bMapInit=true;
  }

  initOnLocation(lng:number, lat:number, bPhoto:boolean){
    if(this.bMapInit){
      this.wrap.setCenter({lat:lat,lng:lng});
    }
    else{
      let type = 'roadmap';
      if(bPhoto)
        type = 'satellite';
      this.wrap.createMap(this.mapViewThe.nativeElement,<MapOptions>{
        streetViewControl: false,
        zoomControl: true,
        mapTypeControl: false,
        mapTypeId: type,
        fullscreenControl:false,      
        center: {
          lat: this.lat,
          lng: this.lng
        },
        zoom: 12
      });
      this.bMapInit=true;
    }
    // let firstPlace = fromLonLat([lon,lat]);
    // if(this.map==null){
    //   this.view = new olView({ center: firstPlace, zoom: 15 });
    //   this.sourceXYZ = new olXYZ({
    //     url: 'http://tile.osm.org/{z}/{x}/{y}.png'
    //   });
  }

  // mapReady(map) {
  //   var m = map;
  //   m.getCenter();
  //   //this.wrap = map;
  // }

  getHeading():number{
    
    //This works eg. of wrapper
    // this.wrap.getCenter().then((c)=>{
    //   console.log(c.lat(),c.lng());
    //   let lat = c.lat() + 0.05;
    //   this.wrap.setCenter({lat:lat,lng:c.lng()});
    // })


    this.wrap.getNativeMap().then(
       (m)=>{
         console.log("got it");
         console.log(m.getCenter());
       },
       function(r){
         console.log(r);
       }
    ).catch((r)=>{console.log(r)});
    

    return 5;
  }
}
