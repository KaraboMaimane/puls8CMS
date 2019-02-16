import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';
import { Router } from '@angular/router';
import { Profile } from 'selenium-webdriver/firefox';
import { obj } from '../../app/class';
import ProfileArr from '../../app/class'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  DjProfiles = new Array();
  houseDjs = new Array();
  hipHopDjs = new Array();
  bio: any = 'Select A Genre And A Dj Profile To View Their Information';
  city: any;
  fullname: any = 'No Profile Selected';
  email;
  gender;
  payment;
  price;
  role;
  stagename: any;
  totalDjs;
  img: string = 'http://www.dealnetcapital.com/files/2014/10/blank-profile.png';
  modal;
  obj = {} as obj
  page: string = 'home';

  lactive: string = 'bio';


  constructor(public database: DatabaseService, private router: Router) {
    this.database.retreiveDJs().then((data: any) => {
      this.DjProfiles = data;
      console.log(this.DjProfiles)
    })
  }

  ngOnInit() {
    // this.HouseSection();
    // this.HipHopSection();
    // this.AllSection();

  }

  AllSection() {
    this.database.retreiveDJs().then((data: any) => {
      this.DjProfiles = data;
      console.log(this.DjProfiles)
    })
  }

  HouseSection() {
    this.database.houseDjs().then((data: any) => {
      this.houseDjs = data;
      console.log(this.houseDjs)
    })
  }


  HipHopSection() {
    this.database.HipHopDjs().then((data: any) => {
      console.log(data)
      this.hipHopDjs = data;
    })
  }

  DisplayInfor(x) {
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

  ViewProfile() {
    let obj = {
      fullname: this.fullname,
      bio: this.bio,
      city: this.city,
      email: this.email,
      gender: this.gender,
      payment: this.payment,
      price: this.price,
      stagename: this.stagename,
      img: this.img
    }
    arry.push(obj)
    console.log(arry)


    this.router.navigate(['/profile']);
    // console.log(this.obj)
  }

  // Event(x){
  //   this.router.navigate(['/events', {name:this.username, key:x}]);
  // }
  navigate(page: string) {
    this.router.navigate([page]);
  }



}


var arry = [];

export default arry;
