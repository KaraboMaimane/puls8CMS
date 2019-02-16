import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
// declare var firebase
@Injectable({
  providedIn: 'root'
})


export class DatabaseService {
  totalOutlets: number;
  database = firebase.database();
  authentication = firebase.auth();
  DjsArray = new Array();
  houseDjsArray = new Array();
  hipHopDjsArray = new Array();
  RnBDjsArray = new Array();
  DeepHouseDjsArray = new Array();
  ElecroDancMusicArray = new Array();
  idsArray = new Array();
  state;
  key;
  userid
  constructor() { }

  DjUser(userid) {
    this.userid = userid;
    console.log(this.userid)
  }
  getKey(key) {
    this.key = key
    console.log(this.key)
  }

  assignIds(k) {
    this.idsArray = k;
  }
  retreiveDJs() {
    return new Promise((accpt, rej) => {
      this.database.ref('Registration').on('value', (data: any) => {
        var Djs = data.val();
        console.log(Djs)
        var keys = Object.keys(Djs)
        console.log(keys)
        // this.assignIds(keys)
        for (var x = 0; x < keys.length; x++) {
          this.database.ref('Registration/' + keys[x]).on('value', (data2: any) => {
            var details = data2.val();
            var keys2 = Object.keys(details)       
            var k = keys[x]
            let obj = {
              bio: details[keys2[0]].bio,
              city: details[keys2[0]].city,
              email: details[keys2[0]].email,
              fullname: details[keys2[0]].fullname,
              gender: details[keys2[0]].gender,
              genre: details[keys2[0]].genre,
              payment: details[keys2[0]].payment,
              price: details[keys2[0]].price,
              role: details[keys2[0]].role,
              stagename: details[keys2[0]].stagename,
              img: details[keys2[0]].img,
              // outlets: this.totalOutlets
            }
            // if (obj.role != null || obj.role != undefined) {
            //   this.DjsArray.push(obj)
            //   this.totalOutlets = x + 1;
            //   console.log(this.totalOutlets)
            // }
            this.DjsArray.push(obj);
            console.log(this.DjsArray)
          })
        }
      })
      accpt(this.DjsArray)
      console.log(this.DjsArray);
    })

  }

  houseDjs() {
    return new Promise((accpt, rej) => {
      this.database.ref('Registration/').on('value', (data: any) => {
        var Djs = data.val();
        var keys = Object.keys(Djs)
        for (var x = 0; x < keys.length; x++) {
          this.database.ref('Registration/' + keys[x]).on('value', (data2: any) => {
            let displayHouseDj = data2.val();
            var keys2 = Object.keys(displayHouseDj)
            var k = keys[x];
            let obj = {
              bio:  displayHouseDj[keys2[0]].bio,
              city:  displayHouseDj[keys2[0]].city,
              email: displayHouseDj[keys2[0]].email,
              fullname:  displayHouseDj[keys2[0]].fullname,
              gender:  displayHouseDj[keys2[0]].gender,
              genre:  displayHouseDj[keys2[0]].genre,
              payment: displayHouseDj[keys2[0]].payment,
              price: displayHouseDj[keys2[0]].price,
              role:  displayHouseDj[keys2[0]].role,
              stagename:  displayHouseDj[keys2[0]].stagename,
              img:  displayHouseDj[keys2[0]].img,
            }
            // if (obj.role != null || obj.role != undefined) {
              if (obj.genre == "Commercial house") {
                this.houseDjsArray.push(obj)
                console.log(this.houseDjsArray)
              }
            // }
            this.houseDjsArray.push(obj);
            console.log(this.houseDjsArray)
           })
        }
       
      })
      accpt(this.houseDjsArray)
      console.log(this.houseDjsArray)
    })
  }

  DeepHouseDjs() {
    return new Promise((accpt, rej) => {
      this.database.ref('Registration/').on('value', (data: any) => {
        var Djs = data.val();
        var keys = Object.keys(Djs)
        for (var x = 0; x < keys.length; x++) {
          this.database.ref('Registration/' + keys[x]).on('value', (data2: any) => {
            let displayHouseDj = data2.val();
            var keys2 = Object.keys(displayHouseDj)
            var k = keys[x];
            let obj = {
              bio:  displayHouseDj[keys2[0]].bio,
              city:  displayHouseDj[keys2[0]].city,
              email: displayHouseDj[keys2[0]].email,
              fullname:  displayHouseDj[keys2[0]].fullname,
              gender:  displayHouseDj[keys2[0]].gender,
              genre:  displayHouseDj[keys2[0]].genre,
              payment: displayHouseDj[keys2[0]].payment,
              price: displayHouseDj[keys2[0]].price,
              role:  displayHouseDj[keys2[0]].role,
              stagename:  displayHouseDj[keys2[0]].stagename,
              img:  displayHouseDj[keys2[0]].img,
            }
            if (obj.role != null || obj.role != undefined) {
              if (obj.genre == "Commercial house") {
                this.houseDjsArray.push(obj)
                console.log(this.houseDjsArray)
              }
            }
            this.DeepHouseDjsArray.push(obj);
            console.log(this.DeepHouseDjsArray)
           })
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
          this.database.ref('Registration/' + keys[x]).on('value', (data2: any) => {
            let displayHouseDj = data2.val();
            var keys2 = Object.keys(displayHouseDj)
            var k = keys[x];
            let obj = {
              bio:  displayHouseDj[keys2[0]].bio,
              city:  displayHouseDj[keys2[0]].city,
              email: displayHouseDj[keys2[0]].email,
              fullname:  displayHouseDj[keys2[0]].fullname,
              gender:  displayHouseDj[keys2[0]].gender,
              genre:  displayHouseDj[keys2[0]].genre,
              payment: displayHouseDj[keys2[0]].payment,
              price: displayHouseDj[keys2[0]].price,
              role:  displayHouseDj[keys2[0]].role,
              stagename:  displayHouseDj[keys2[0]].stagename,
              img:  displayHouseDj[keys2[0]].img,
            }
            if (obj.role != null || obj.role != undefined) {
              if (obj.genre == "Commercial house") {
                this.hipHopDjsArray.push(obj)
                console.log(this.hipHopDjsArray)
              }
            }
            this.hipHopDjsArray.push(obj);
            console.log(this.hipHopDjsArray)
           })
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
          this.database.ref('Registration/' + keys[x]).on('value', (data2: any) => {
            let displayHouseDj = data2.val();
            var keys2 = Object.keys(displayHouseDj)
            var k = keys[x];
            let obj = {
              bio:  displayHouseDj[keys2[0]].bio,
              city:  displayHouseDj[keys2[0]].city,
              email: displayHouseDj[keys2[0]].email,
              fullname:  displayHouseDj[keys2[0]].fullname,
              gender:  displayHouseDj[keys2[0]].gender,
              genre:  displayHouseDj[keys2[0]].genre,
              payment: displayHouseDj[keys2[0]].payment,
              price: displayHouseDj[keys2[0]].price,
              role:  displayHouseDj[keys2[0]].role,
              stagename:  displayHouseDj[keys2[0]].stagename,
              img:  displayHouseDj[keys2[0]].img,
            }
            if (obj.role != null || obj.role != undefined) {
              if (obj.genre == "Commercial house") {
                this.RnBDjsArray.push(obj)
                console.log(this.RnBDjsArray)
              }
            }
            this.RnBDjsArray.push(obj);
            console.log(this.RnBDjsArray)
           })
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
          this.database.ref('Registration/' + keys[x]).on('value', (data2: any) => {
            let displayHouseDj = data2.val();
            var keys2 = Object.keys(displayHouseDj)
            var k = keys[x];
            let obj = {
              bio:  displayHouseDj[keys2[0]].bio,
              city:  displayHouseDj[keys2[0]].city,
              email: displayHouseDj[keys2[0]].email,
              fullname:  displayHouseDj[keys2[0]].fullname,
              gender:  displayHouseDj[keys2[0]].gender,
              genre:  displayHouseDj[keys2[0]].genre,
              payment: displayHouseDj[keys2[0]].payment,
              price: displayHouseDj[keys2[0]].price,
              role:  displayHouseDj[keys2[0]].role,
              stagename:  displayHouseDj[keys2[0]].stagename,
              img:  displayHouseDj[keys2[0]].img,
            }
            if (obj.role != null || obj.role != undefined) {
              if (obj.genre == "Commercial house") {
                this.ElecroDancMusicArray.push(obj)
                console.log(this.ElecroDancMusicArray)
              }
            }
            this.ElecroDancMusicArray.push(obj);
            console.log(this.ElecroDancMusicArray)
           })
        }
       
      })
      accpt(this.ElecroDancMusicArray)
    })
  }
  register(email: string, password: string){
    return this.authentication.createUserWithEmailAndPassword(email, password);
  }

  login(email: string, password: string){
    return this.authentication.signInWithEmailAndPassword(email, password);
  }

  resetpassword(email: string){
    return this.authentication.sendPasswordResetEmail(email);
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
