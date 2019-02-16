import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import * as firebase from 'firebase'; 
import { AppComponent } from './app.component';
import { DatabaseService } from './database.service';
import { HomeComponent } from './home/home.component';
import {Route,RouterModule,Routes} from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import {FormsModule} from '@angular/forms';
import { RegisterComponent } from './register/register.component';

  var config = {
  apiKey: "AIzaSyDHRAF0bth4sm4p4xTTBzjqc3RmdMNLcY4",
  authDomain: "puls8-41496.firebaseapp.com",
  databaseURL: "https://puls8-41496.firebaseio.com",
  projectId: "puls8-41496",
  storageBucket: "puls8-41496.appspot.com",
  messagingSenderId: "110966517847"
};
firebase.initializeApp(config)

const appRoutes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'app', component: HomeComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register' , component: RegisterComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [DatabaseService],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
