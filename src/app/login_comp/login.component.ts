import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../services/config.service';
import { Router} from '@angular/router';

@Component({
  selector: 'login-comp',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  constructor (private configService: ConfigService,
               private router: Router) {}

  public colorForStyling: string;
  public bgcolorForStyling: string;
  public fontSizeForStyling: string;
  public email: string = undefined;
  public password: string = undefined;
  public user: Object = {};
  public visibilityEmail: boolean = true;
  public visibilityFill: boolean = true;
  public visibilityNotYourData: boolean = true;
  public visibilityUserAlreadyExist: boolean = true;

  ngOnInit() {
    // take arrUsers from local storage
    if (JSON.parse(localStorage.getItem('users')) !== null) {
     this.configService.arrUsers = JSON.parse(localStorage.getItem('users'));
    }
    // taking data from service
    this.configService.styleConfigStream$.subscribe( (objEdits) => {
      // I should check if objEdits-data is not empty
      if (objEdits['color']) {
        this.colorForStyling = objEdits['color'];
      } else {
        this.colorForStyling = this.configService.currentUser['color'];
      }
      if (objEdits['bgcolor']) {
        this.bgcolorForStyling = objEdits['bgcolor'];
      } else {
        this.bgcolorForStyling = this.configService.currentUser['bgcolor'];
      }
      if (objEdits['fontSize']) {
        this.fontSizeForStyling = objEdits['fontSize'];
      } else {
        this.fontSizeForStyling = this.configService.currentUser['fontSize'];
      }
      // making complete current user
      this.user['password'] = this.configService.currentUser['password'];
      this.user['color'] = this.colorForStyling;
      this.user['bgcolor'] = this.bgcolorForStyling;
      this.user['fontSize'] = this.fontSizeForStyling;
      // all current data I should put to service
      this.configService.currentUser = this.user;
      this.configService.arrUsers.splice(this.configService.indexOfCurrentUser, 1, this.user);
      this.configService.saveLocalUsers();
    });
  }

  signIn() {
    this.visibilityFill = true;
    this.visibilityEmail = true;
    this.visibilityNotYourData = true;
    this.visibilityFill = true;
    this.visibilityEmail = true;
    this.visibilityUserAlreadyExist = true;
    let reg = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    // checking for filling all fields
    if (this.email === undefined || this.password === undefined || this.email === '' || this.password === ''){
      this.visibilityFill = false;
      // checking for correct syntax of email
    } else if (!this.email.match(reg)) {
              this.visibilityEmail = false;
              // I should find sign-in-user in arrUsers
            } else {
                let k: number = 0;
                for (let i = this.configService.arrUsers.length - 1; i >= 0; i--) {
                  // if email and password are in arrUsers
                  if (this.email == this.configService.arrUsers[i]['email'] && this.password == this.configService.arrUsers[i]['password']) {
                    // setting current user
                    this.user = this.configService.arrUsers[i];
                    this.configService.indexOfCurrentUser = i;
                    this.configService.currentUser = this.user;
                    this.router.navigate(['/admin']);
                    k = 1;
                    break;
                  }
                }
                // if email and password are not in arrUsers
                if (k == 0) {
                  this.visibilityNotYourData = false;
                }
    }
  }

  signUp() {
    this.visibilityFill = true;
    this.visibilityEmail = true;
    this.visibilityUserAlreadyExist = true;
    this.visibilityFill = true;
    this.visibilityEmail = true;
    this.visibilityNotYourData = true;
    let reg = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    // checking for filling all fields
    if (this.email === undefined || this.password === undefined || this.email === '' || this.password === ''){
      this.visibilityFill = false;
      // checking for correct syntax of email
      } else if (!this.email.match(reg)) {
            this.visibilityEmail = false;
            // checking if this user is already exist
            } else {
                let k: number = 0;
                for (let i = this.configService.arrUsers.length - 1; i >= 0; i--) {
                  if (this.email == this.configService.arrUsers[i]['email'] && this.password == this.configService.arrUsers[i]['password']) {
                    k = 1;
                    break;
                  }
                }
                if (k == 1) {
                  this.visibilityUserAlreadyExist = false;
                  // set current user from input's data
                } else {
                    let indexUser: string = (Date.now().toString(36) + Math.random().toString(36).substr(2, 5)).toUpperCase();
                    this.user = {
                      'idUser' : indexUser,
                      'email' : this.email,
                      'password' : this.password,
                      'color' : '',
                      'bgcolor': '',
                      'fontSize': ''
                    };
                    // all current data I should put to service
                    this.configService.arrUsers.push(this.user);
                    this.configService.indexOfCurrentUser = this.configService.arrUsers.length - 1;
                    this.configService.currentUser = this.user;
                    this.configService.saveLocalUsers();
                    this.router.navigate(['/admin']);
                }
    }
  }
}
