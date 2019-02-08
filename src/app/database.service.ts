import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
// declare var firebase
@Injectable({
  providedIn: 'root'
})


export class DatabaseService {
  database = firebase.database();
  authentication = firebase.auth();
  DjsArray = new Array();
  houseDjsArray = new Array();
  hipHopDjsArray = new Array();

  constructor() { }

  retreiveDJs(){
    return new Promise((accpt,rej)=>{
      this.database.ref('Registration/').on('value', (data:any)=>{
        var Djs = data.val();
        var keys = Object.keys(Djs)
        for(var x = 0; x < keys.length;x++){
          var k = keys[x];
          let obj = {
            bio: Djs[k].bio,
            city: Djs[k].city,
            email: Djs[k].email,
            fullname: Djs[k].fullname,
            gender: Djs[k].gender,
            genre: Djs[k].genre,
            payment: Djs[k].payment,
            price: Djs[k].price,
            role: Djs[k].role,
            stagename: Djs[k].stagename
          }
          if(obj.role != null || obj.role != undefined){
            this.DjsArray.push(obj)
            console.log(this.DjsArray)
          }
        }
      })
      accpt(this.DjsArray)
    })
    
  }

  houseDjs(){
    return new Promise((accpt,rej)=>{
      this.database.ref('Registration/').on('value', (data:any)=>{
        var Djs = data.val();
        var keys = Object.keys(Djs)
        for(var x = 0; x < keys.length;x++){
          var k = keys[x];
          let obj = {
            bio: Djs[k].bio,
            city: Djs[k].city,
            email: Djs[k].email,
            fullname: Djs[k].fullname,
            gender: Djs[k].gender,
            genre: Djs[k].genre,
            payment: Djs[k].payment,
            price: Djs[k].price,
            role: Djs[k].role,
            stagename: Djs[k].stagename
          }
          if(obj.role != null || obj.role != undefined){
             if(obj.genre == "Commercial house"){
              this.houseDjsArray.push(obj)
            }
            console.log(this.houseDjsArray)
          }
        }
      })
      accpt(this.houseDjsArray)
    })
  }
  HipHopDjs(){
    return new Promise((accpt,rej)=>{
      this.database.ref('Registration/').on('value', (data:any)=>{
        var Djs = data.val();
        var keys = Object.keys(Djs)
        for(var x = 0; x < keys.length;x++){
          var k = keys[x];
          let obj = {
            bio: Djs[k].bio,
            city: Djs[k].city,
            email: Djs[k].email,
            fullname: Djs[k].fullname,
            gender: Djs[k].gender,
            genre: Djs[k].genre,
            payment: Djs[k].payment,
            price: Djs[k].price,
            role: Djs[k].role,
            stagename: Djs[k].stagename
          }
          if(obj.role != null || obj.role != undefined){
             if(obj.genre == "Hip-Hop"){
              this.hipHopDjsArray.push(obj)
            }
            console.log(this.hipHopDjsArray)
          }
        }
      })
      accpt(this.hipHopDjsArray)
    })
  }

  signIn(){


  }

}
