import { Component, OnInit } from '@angular/core';
import { Sea } from '../models/sea';
import { SeaService }       from '../services/sea.service';


@Component({
  selector: 'app-select-station',
  templateUrl: './select-station.component.html',
  styleUrls: ['./select-station.component.css'],
  providers: [ SeaService ],
})
export class SelectStationComponent implements OnInit {

 errorMessage: string;
  sea: Sea[];
  condition=false;
 //deviceObjects = [{name: 1}, {name: 2}, {name: 3}];
  selectedDeviceObj = this.sea;
  selectedDevicecount = this.sea;
  selected = this.sea;
  a=0;
  // splitted = this.sea
  onChangeObj(newObj) {
console.log(newObj);
    
    this.selectedDeviceObj = newObj.horaires;
     this.selectedDevicecount = newObj.count;
  }
  onClickMeBaby(obj,i) { 

    this.a=obj.count[i]++;
  //this.addHero(this.a);
  console.log("CLICKKK")
  }
  constructor (private heroService: SeaService) {}

  ngOnInit() { this.getSea(); }

  getSea() {
    this.heroService.getSea()
                     .subscribe(
                       sea => this.sea = sea,
                       error =>  this.errorMessage = <any>error);
  }



 }