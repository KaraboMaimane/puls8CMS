import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { DatabaseService } from '../database.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  regfail: string = 'false';
  regsucc: string = 'false';
  regwarn: string = 'false';
  loader: string = 'false';
  message: string = '';
  constructor( private router: Router, private database: DatabaseService) { }

  ngOnInit() {
  }
  logIn(){
    this.router.navigate(['/login']);
  }

  login(form:NgForm){
    if(form.valid){
      this.loader = 'true';
      this.database.register(form.value.email, form.value.password).then((data)=>{
        let user = firebase.auth().currentUser;
        user.sendEmailVerification().then((data)=>{
          this.loader ='false';
          this.regsucc = 'true';
        }).catch((error)=>{
          this.loader = 'false';
          this.regfail = 'true';
          this.message =  error.message;
        })
        
      }).catch((error)=>{
        console.log(error);
        this.loader = 'false';
        this.regfail = 'true';
        this.message = error.message;
      });
    }else{
      this.regwarn = 'true';
    }

  }
}
