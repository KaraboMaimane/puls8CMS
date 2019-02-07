import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  DjProfiles = new Array();
  houseDjs = new Array();
  hipHopDjs = new Array();
  bio;
  city;
  fullname;
  email;
  gender;
  payment;
  price;
  role;
  stagename;
  

  constructor(public database: DatabaseService) { }
   
  ngOnInit() {
    this.HouseSection();
    this.HipHopSection();
    this.database.retreiveDJs().then((data:any)=>{
     this.DjProfiles = data;
     this.role = this.DjProfiles;
     console.log(this.role)

    })
  }

  HouseSection(){
    this.database.houseDjs().then((data:any)=>{
      console.log(data)
      this.houseDjs = data;
    })
  }

  HipHopSection(){
    this.database.HipHopDjs().then((data:any)=>{
      console.log(data)
      this.hipHopDjs = data;
    })
  }

  

}
