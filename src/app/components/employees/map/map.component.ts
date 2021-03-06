import {Component, Input, OnInit, OnChanges} from '@angular/core';



@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, OnChanges {
  @Input() selectedUser: any
  public center: any;
  public markers: any
  public options: google.maps.MapOptions = {
    mapTypeId: 'terrain',
    zoomControl: true,
    scrollwheel: false,
    disableDoubleClickZoom: true,
   // maxZoom: 15,
   // minZoom: 8,

  };
  public currentZoom = 12;

  constructor() { }

  ngOnInit(): void {}

  ngOnChanges(changes: any) {
    // navigator.geolocation.getCurrentPosition((position) => {
      this.center = {
        lat: +this.selectedUser.location.coordinates.latitude,
        lng: +this.selectedUser.location.coordinates.longitude,
      }
      this.addMarker(this.selectedUser)
    // });
  }

  addMarker(employee: any) {
    this.markers = {
      position: {
        lat:  +employee.location.coordinates.latitude,
        lng: +employee.location.coordinates.longitude,
      },
      label: {
        color: 'red',
        text: `${employee.location.country + ', ' + employee.location.city}` ,
      },
      title: `${employee.name.first + ' ' + employee.name.last}`,
      options: { animation: google.maps.Animation.BOUNCE },
    }
  }
}
