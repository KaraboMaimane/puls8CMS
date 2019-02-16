import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';
import { Router } from '@angular/router';
import { Profile } from 'selenium-webdriver/firefox';

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
  
  page: string= 'home';

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

  AllSection(){
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

    this.router.navigate(['/profile'])
  }

  navigate(page: string) {
    this.router.navigate([page]);
  }

 

}
