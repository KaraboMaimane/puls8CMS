import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import arry from '../../app/home/home.component'
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  seg: string = 'profile';
  Profile =[];
  temp = [];
  event: Observable<string | null>
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.seg = 'profile';

    this.Profile = arry
    console.log(this.Profile)

  }

}
 