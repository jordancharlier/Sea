import { Component, OnInit } from '@angular/core';
import { config } from '../../environments/firebase.config';
import {initializeApp, database} from 'firebase';
import { AngularFire, AuthProviders, AuthMethods, FirebaseObjectObservable,FirebaseListObservable} from 'angularfire2';

@Component({
  selector: 'app-catch',
  templateUrl: './catch.component.html',
  styleUrls: ['./catch.component.css']
})
export class CatchComponent implements OnInit {
  // res=22;
  // sqa:any;
  //  objectfire: Observable<any[]>;
  // constructor(public af: AngularFire) { 
  //  this.objectfire  = af.database.object('zebi');
  //  console.log(this.objectfire);
    //initializeApp(config);&
    // const coures$:FirebaseListObservable<any>=af.database.list('station 1');
    // coures$.subscribe(
    //   val=>this.res=val   
    // );
    // console.log(this.res);
  item: FirebaseObjectObservable<any>;
  constructor(private af: AngularFire) { 
    this.item = af.database.object('/station/BNF');
  }
  


  ngOnInit() {  } 
  //   var root=database().ref();
  //     var res;
  //     this.sqa=root.on('value',function(snap){
  //       if(!snap.child('item').exists()){
  //            res=snap.child("station 1").child("1").val();
  //           console.log(res);  
  //     }
  //     });
  //     console.log(this.sqa);
  // }

  } 
