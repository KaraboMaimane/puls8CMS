import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  DjProfiles = new Array();
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
    this.database.retreiveDJs().then((data:any)=>{
     console.log(data)
     
     this.DjProfiles = data;
     
     console.log(this.DjProfiles);

    })
  }

  

}
