import { Component, OnInit } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods, FirebaseObjectObservable } from 'angularfire2';
import { Router } from '@angular/router';
import { moveIn, fallIn, moveInLeft } from '../router.animations';
import { database } from 'firebase';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css'],
  animations: [moveIn(), fallIn(), moveInLeft()],
  host: {'[@moveIn]': ''}
})

export class MembersComponent implements OnInit {
  name: any;
  state: string = '';
  horaires: FirebaseObjectObservable<any>;    
  stations: FirebaseObjectObservable<any>;    

  constructor(public af: AngularFire,private router: Router) {

    this.horaires = af.database.object('/station/BNF');  
    this.stations = af.database.object('/station/stations');  
    this.af.auth.subscribe(auth => {
      if(auth) {
        this.name = auth;
      }
    });
  }


  logout() {
     this.af.auth.logout();
     this.router.navigateByUrl('/login');
  }
  toto(i){
    console.log(i);
  }

  ngOnInit() {
  }

}
