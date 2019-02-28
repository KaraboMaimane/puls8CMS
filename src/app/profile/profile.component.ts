import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import ProfileArr from '../../app/class';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  seg: string = 'profile';
  Profile =[];
  temp = [];
  key;
  event: Observable<string | null>
  object: any;
  constructor(private route: ActivatedRoute, private router: Router,public getdata:DatabaseService) { 
    this.getdata.retrieveMusic(this.key).then((data)=>{
     console.log(data)
    })
    // this.getdata.getComments().then((data)=>{
    //  console.log(data)
    // })
  }

  ngOnInit() {
    this.seg = 'profile';
    this.Profile = ProfileArr;
    this.object = ProfileArr[0];
    this.key = ProfileArr[0].key
    console.log(this.key)
    console.log(this.object);
  }

  navigate(page: string){
    this.router.navigate([`/${page}`]);
  }
}
 