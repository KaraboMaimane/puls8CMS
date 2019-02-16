import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DatabaseService } from '../database.service';
import { Router } from '@angular/router';
declare var Swal;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  logfail: string = 'false';
  logsucc: string = 'false';
  logwarn: string = 'false';
  loader: string = 'false';
  message: string = '';
  reset: string;
  constructor(private database: DatabaseService, private router: Router) { }

  ngOnInit() {
    this.logfail = 'false';
    this.logsucc = 'false';
    this.logwarn = 'false';
    this.loader = 'false';
    this.reset = 'false';
    this.message = '';
  }

  login(form: NgForm) {
    if (form.valid) {
      this.loader = 'true';
      this.database.login(form.value.email, form.value.password).then((data) => {
        this.loader = 'false';
        this.logsucc = 'true';

      }).catch((error) => {
        this.loader = 'false';
        this.logfail = 'true';
        this.message = error.message;
      });
    } else {
      this.logwarn = 'true';
    }

  }

  passwordReset() {
    const { value: email } = Swal.fire({
      title: 'Enter your email address',
      input: 'email',
      showCancelButton: true,
      inputValidator: (value) => {
        if (value) {
          console.log(value)
          this.database.resetpassword(value).then((email) => {
            console.log(email);
            Swal.fire({
              position: 'center',
              type: 'success',
              title: `A Password Reset Email Has Been Sent to ${value}`,
              showConfirmButton: false,
              timer: 2500
            })
          })
          // Swal.fire(`Your IP address is ${value}`)
        }
        return !value && 'Please enter a valid email address!';

      }

    })
  }

  cancelModal() {
    this.router.navigate(["home"]);
    this.logsucc = 'false';
  }

  nextpage(page: string){
    this.router.navigate([page]);
  }

}
