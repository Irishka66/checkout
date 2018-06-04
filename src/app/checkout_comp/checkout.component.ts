import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../services/config.service';
import { Router} from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { FormGroup, FormControl, Validators} from '@angular/forms';

import { NgForm} from '@angular/forms';

@Component({
  selector: 'checkout-comp',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})

export class CheckoutComponent implements OnInit {

  ngOnInit() {
    window.localStorage.clear();
  }

  constructor (private configService: ConfigService,
               private router: Router) {}

  public firstName: string = undefined;
  public lastName: string = undefined;
  public userName: string = undefined;
  public email: string = undefined;
  public address: string = undefined;
  public address2: string = undefined;
  public country: string = undefined;
  public state: string = undefined;
  public zip: string = undefined;

  public sameAddress: boolean = false;
  public saveInfo: boolean = false;
  public payment: string = 'credit';

  public nameOnCard: string = undefined;
  public creditCardNumber: string = undefined;
  public expiration: string = undefined;
  public cvv: string = undefined;
  public user: Object = {};

  checkout() {
    this.user = {
      'idUser' : 1,
      'firstName' : this.firstName,
      'lastName' : this.lastName,
      'userName' : this.userName,
      'email': this.email,
      'address': this.address,
      'address2' : this.address2,
      'country' : this.country,
      'state' : this.state,
      'zip': this.zip,
      'nameOnCard' : this.nameOnCard,
      'creditCardNumber' : this.creditCardNumber,
      'expiration' : this.expiration,
      'cvv': this.cvv,

    };
    console.log(this.user);
  }


  // public myForm : FormGroup = new FormGroup({
  //
  //   "userPassword": new FormControl("", Validators.required),
  //   "userEmail": new FormControl("", [
  //     Validators.required,
  //     Validators.pattern("[a-zA-Z_]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}")
  //   ]),
  // });
  //
  //
  // ngOnInit() {
  //   // take arrUsers from local storage
  //   if (JSON.parse(localStorage.getItem('users')) !== null) {
  //    this.configService.arrUsers = JSON.parse(localStorage.getItem('users'));
  //   }
  //   // taking data from service
  //   this.configService.styleConfigStream$.subscribe( (objEdits) => {
  //     // I should check if objEdits-data is not empty
  //     if (objEdits['color']) {
  //       this.colorForStyling = objEdits['color'];
  //     } else {
  //       this.colorForStyling = this.configService.currentUser['color'];
  //     }
  //     if (objEdits['bgcolor']) {
  //       this.bgcolorForStyling = objEdits['bgcolor'];
  //     } else {
  //       this.bgcolorForStyling = this.configService.currentUser['bgcolor'];
  //     }
  //     if (objEdits['fontSize']) {
  //       this.fontSizeForStyling = objEdits['fontSize'];
  //     } else {
  //       this.fontSizeForStyling = this.configService.currentUser['fontSize'];
  //     }
  //     // making complete current user
  //     this.user['password'] = this.configService.currentUser['password'];
  //     this.user['color'] = this.colorForStyling;
  //     this.user['bgcolor'] = this.bgcolorForStyling;
  //     this.user['fontSize'] = this.fontSizeForStyling;
  //     // all current data I should put to service
  //     this.configService.currentUser = this.user;
  //     this.configService.arrUsers.splice(this.configService.indexOfCurrentUser, 1, this.user);
  //     this.configService.saveLocalUsers();
  //   });
  // }
  //
  // signIn() {
  //   this.visibilityFillError = false;
  //   this.visibilityEmailError = false;
  //   this.visibilityUserAlreadyExistError = false;
  //   this.visibilityNotYourDataError = false;
  //   let reg = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  //
  //   // checking for filling all fields
  //   if (this.email === undefined || this.password === undefined || this.email === '' || this.password === ''){
  //     this.visibilityFillError = true;
  //     return;
  //   }
  //
  //   // checking for correct syntax of email
  //   if (!this.email.match(reg)) {
  //     this.visibilityEmailError = true;
  //     return;
  //   }
  //
  //   // I should find sign-in-user in arrUsers
  //   let k: number = 0;
  //   for (let i = this.configService.arrUsers.length - 1; i >= 0; i--) {
  //     // if email and password are in arrUsers
  //     if (this.email == this.configService.arrUsers[i]['email'] && this.password == this.configService.arrUsers[i]['password']) {
  //       // setting current user
  //       this.user = this.configService.arrUsers[i];
  //       this.configService.indexOfCurrentUser = i;
  //       this.configService.currentUser = this.user;
  //       this.router.navigate(['/admin']);
  //       k = 1;
  //       break;
  //     }
  //   }
  //
  //   // if email and password are not in arrUsers
  //   if (k == 0) {
  //     this.visibilityNotYourDataError = true;
  //   }
  // }
  //
  // signUp() {
  //   this.visibilityFillError = false;
  //   this.visibilityEmailError = false;
  //   this.visibilityUserAlreadyExistError = false;
  //   this.visibilityNotYourDataError = false;
  //   let reg = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  //
  //   // checking for filling all fields
  //   if (this.email === undefined || this.password === undefined || this.email === '' || this.password === ''){
  //     this.visibilityFillError = true;
  //   }
  //
  //   // checking for correct syntax of email
  //   if (!this.email.match(reg)) {
  //     this.visibilityEmailError = true;
  //   }
  //
  //   // checking if this user is already exist
  //   let k: number = 0;
  //   for (let i = this.configService.arrUsers.length - 1; i >= 0; i--) {
  //     if (this.email == this.configService.arrUsers[i]['email']) {
  //       // if (this.email == this.configService.arrUsers[i]['email'] && this.password == this.configService.arrUsers[i]['password']) {
  //       k = 1;
  //       break;
  //     }
  //   }
  //   if (k == 1) {
  //     this.visibilityUserAlreadyExistError = true;
  //     // set current user from input's data
  //   } else {
  //     let indexUser: string = (Date.now().toString(36) + Math.random().toString(36).substr(2, 5)).toUpperCase();
  //     this.user = {
  //       'idUser' : indexUser,
  //       'email' : this.email,
  //       'password' : this.password,
  //       'color' : '',
  //       'bgcolor': '',
  //       'fontSize': ''
  //     };
  //     // all current data I should put to service
  //     this.configService.arrUsers.push(this.user);
  //     this.configService.indexOfCurrentUser = this.configService.arrUsers.length - 1;
  //     this.configService.currentUser = this.user;
  //     this.configService.saveLocalUsers();
  //     this.router.navigate(['/admin']);
  //   }
  // }

  // signIn() {
  //   this.visibilityFillError = true;
  //   this.visibilityEmail = true;
  //   this.visibilityNotYourDataError = true;
  //   // this.visibilityFillError = true;
  //   // this.visibilityEmail = true;
  //   this.visibilityUserAlreadyExistError = true;
  //   let reg = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  //   // checking for filling all fields
  //   if (this.email === undefined || this.password === undefined || this.email === '' || this.password === ''){
  //     this.visibilityFillError = false;
  //     // checking for correct syntax of email
  //   } else if (!this.email.match(reg)) {
  //             this.visibilityEmail = false;
  //             // I should find sign-in-user in arrUsers
  //           } else {
  //               let k: number = 0;
  //               for (let i = this.configService.arrUsers.length - 1; i >= 0; i--) {
  //                 // if email and password are in arrUsers
  //                 if (this.email == this.configService.arrUsers[i]['email'] && this.password == this.configService.arrUsers[i]['password']) {
  //                   // setting current user
  //                   this.user = this.configService.arrUsers[i];
  //                   this.configService.indexOfCurrentUser = i;
  //                   this.configService.currentUser = this.user;
  //                   this.router.navigate(['/admin']);
  //                   k = 1;
  //                   break;
  //                 }
  //               }
  //               // if email and password are not in arrUsers
  //               if (k == 0) {
  //                 this.visibilityNotYourDataError = false;
  //               }
  //   }
  // }
  //
  // signUp() {
  //   this.visibilityFillError = true;
  //   this.visibilityEmail = true;
  //   this.visibilityUserAlreadyExistError = true;
  //   // this.visibilityFillError = true;
  //   // this.visibilityEmail = true;
  //   this.visibilityNotYourDataError = true;
  //   let reg = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  //   // checking for filling all fields
  //   if (this.email === undefined || this.password === undefined || this.email === '' || this.password === ''){
  //     this.visibilityFillError = false;
  //     // checking for correct syntax of email
  //     } else if (!this.email.match(reg)) {
  //           this.visibilityEmail = false;
  //           // checking if this user is already exist
  //           } else {
  //               let k: number = 0;
  //               for (let i = this.configService.arrUsers.length - 1; i >= 0; i--) {
  //                 if (this.email == this.configService.arrUsers[i]['email']) {
  //                   // if (this.email == this.configService.arrUsers[i]['email'] && this.password == this.configService.arrUsers[i]['password']) {
  //                   k = 1;
  //                   break;
  //                 }
  //               }
  //               if (k == 1) {
  //                 this.visibilityUserAlreadyExistError = false;
  //                 // set current user from input's data
  //               } else {
  //                   let indexUser: string = (Date.now().toString(36) + Math.random().toString(36).substr(2, 5)).toUpperCase();
  //                   this.user = {
  //                     'idUser' : indexUser,
  //                     'email' : this.email,
  //                     'password' : this.password,
  //                     'color' : '',
  //                     'bgcolor': '',
  //                     'fontSize': ''
  //                   };
  //                   // all current data I should put to service
  //                   this.configService.arrUsers.push(this.user);
  //                   this.configService.indexOfCurrentUser = this.configService.arrUsers.length - 1;
  //                   this.configService.currentUser = this.user;
  //                   this.configService.saveLocalUsers();
  //                   this.router.navigate(['/admin']);
  //               }
  //   }
  // }
}
