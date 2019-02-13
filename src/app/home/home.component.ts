import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';
import { Router } from '@angular/router';

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
  fullname
  email;
  gender;
  payment;
  price;
  role;
  stagename;
  totalDjs;
  img;
  modal;

  page: string = 'home'

  constructor(public database: DatabaseService, private router: Router) {
   
   }

  ngOnInit() {
    this.HouseSection();
    this.HipHopSection();
    this.AllSection();
  
  }

  AllSection(){
    this.houseDjs.length = 0;
    this.database.retreiveDJs().then((data: any) => {
        this.DjProfiles = data;
        console.log(this.DjProfiles)
    })
  }

  HouseSection() {
    this.houseDjs.length = 0;
    this.database.houseDjs().then((data: any) => {
      console.log(data)
      this.houseDjs = data;
    })
  }


  HipHopSection() {
    this.database.HipHopDjs().then((data: any) => {
      console.log(data)
      this.hipHopDjs = data;
    })
  }

  showinfo(x) {
    console.log(x);
    this.fullname = x.fullname;
    this.bio = x.bio;
    this.city = x.city;
    this.email = x.email;
    this.gender = x.gender;
    this.payment = x.payment;
    this.price = x.price;
    this.stagename = x.stagename
    this.img = x.img
  }

  navigate(page: string) {
    this.router.navigate([page]);
  }


}
