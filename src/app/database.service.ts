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
  RnBDjsArray = new Array();
  DeepHouseDjsArray = new Array();
  ElecroDancMusicArray = new Array();
  state;
  constructor() { }

  retreiveDJs() {
    return new Promise((accpt, rej) => {
      this.database.ref('Registration/').on('value', (data: any) => {
        var Djs = data.val();
        var keys = Object.keys(Djs)
        for (var x = 0; x < keys.length; x++) {
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
            stagename: Djs[k].stagename,
            img: Djs[k].img
          }
          if (obj.role != null || obj.role != undefined) {
            this.DjsArray.push(obj)
          }
        }
      })
      accpt(this.DjsArray)
    })

  }

  houseDjs() {
    return new Promise((accpt, rej) => {
      this.database.ref('Registration/').on('value', (data: any) => {
        var Djs = data.val();
        var keys = Object.keys(Djs)
        for (var x = 0; x < keys.length; x++) {
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
            stagename: Djs[k].stagename,
            img: Djs[k].img
          }
          if (obj.role != null || obj.role != undefined) {
            if (obj.genre == "Commercial house") {
              this.houseDjsArray.push(obj)
            }
          }
        }
      })
      accpt(this.houseDjsArray)
    })
  }

  DeepHouseDjs() {
    return new Promise((accpt, rej) => {
      this.database.ref('Registration/').on('value', (data: any) => {
        var Djs = data.val();
        var keys = Object.keys(Djs)
        for (var x = 0; x < keys.length; x++) {
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
            stagename: Djs[k].stagename,
            img: Djs[k].img
          }
          if (obj.role != null || obj.role != undefined) {
            if (obj.genre == "Deep House") {
              this.DeepHouseDjsArray.push(obj)
            }
          }
        }
      })
      accpt(this.DeepHouseDjsArray)
    })
  }

  HipHopDjs() {
    return new Promise((accpt, rej) => {
      this.database.ref('Registration/').on('value', (data: any) => {
        var Djs = data.val();
        var keys = Object.keys(Djs)
        for (var x = 0; x < keys.length; x++) {
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
            stagename: Djs[k].stagename,
            img: Djs[k].img
          }
          if (obj.role != null || obj.role != undefined) {
            if (obj.genre == "Hip-Hop") {
              this.hipHopDjsArray.push(obj)
            }
          }
        }
      })
      accpt(this.hipHopDjsArray)
    })
  }

  RnBDjs() {
    return new Promise((accpt, rej) => {
      this.database.ref('Registration/').on('value', (data: any) => {
        var Djs = data.val();
        var keys = Object.keys(Djs)
        for (var x = 0; x < keys.length; x++) {
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
            stagename: Djs[k].stagename,
            img: Djs[k].img
          }
          if (obj.role != null || obj.role != undefined) {
            if (obj.genre == "RnB") {
              this.RnBDjsArray.push(obj)
            }
          }
        }
      })
      accpt(this.RnBDjsArray)
    })
  }

  ElecroDancMusic() {
    return new Promise((accpt, rej) => {
      this.database.ref('Registration/').on('value', (data: any) => {
        var Djs = data.val();
        var keys = Object.keys(Djs)
        for (var x = 0; x < keys.length; x++) {
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
            stagename: Djs[k].stagename,
            img: Djs[k].img
          }
          if (obj.role != null || obj.role != undefined) {
            if (obj.genre == "EDM") {
              this.ElecroDancMusicArray.push(obj)
            }
          }
        }
      })
      accpt(this.ElecroDancMusicArray)
    })
  }

  Login(email, password) {
    return new Promise((accpt, rej) => {
      this.authentication.signInWithEmailAndPassword(email, password).then(() => {
        accpt("Success")
      }, Error => {
        alert("Something Went wrong!!!")
      })
    })
  }

  getUserState() {
    return new Promise((accpt, rej) => {
      this.authentication.onAuthStateChanged(user => {
        if (user != null || user != undefined) {
          this.state = 1;
        }
        else {
          this.state = 0;
        }
      })
      accpt(this.state)
    })
  }
}
