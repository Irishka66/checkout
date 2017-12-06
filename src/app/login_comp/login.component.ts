import { Component, OnInit, HostListener, Input, EventEmitter, Output} from '@angular/core';
import { ConfigService } from '../services/config.service';
import { Router} from '@angular/router';

@Component({
  selector: 'login-comp',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  // @HostListener('window:beforeunload', ['$event'])
  // beforeunloadHandler() {
  //   this.saveLocalUsers();
  // }
  constructor (private configService: ConfigService,
               private router: Router) {}

  public colorForStyling: string;
  public bgcolorForStyling: string;
  public fontSizeForStyling: string;
  public currentUser: Object;
  public completeCurrentUser: Object;
  public email: string = undefined;
  public password: string = undefined;
  public user: Object = {};
  public arrUsers: Array<any> = [];
  public visibilityEmail: boolean = true;
  public visibilityFill: boolean = true;
  public visibilityNotYourData: boolean = true;

  ngOnInit() {
    if (JSON.parse(localStorage.getItem('users')) !== null) {
      this.arrUsers = JSON.parse(localStorage.getItem('users'));
    }


    this.configService.styleConfigStream$.subscribe( (objEdits) => {
      console.log(objEdits);
      this.colorForStyling = objEdits['color'];
      this.bgcolorForStyling = objEdits['bgcolor'];
      this.fontSizeForStyling = objEdits['fontSize'];

      this.completeCurrentUser = {
        'idUser' : this.user['idUser'],
        'email' : this.user['email'],
        'password' : this.user['password'],
        'color' : this.colorForStyling,
        'bgcolor': this.bgcolorForStyling,
        'fontSize': this.fontSizeForStyling
      };

      this.arrUsers.push(this.completeCurrentUser);
      this.configService.arrUsers = this.arrUsers;

    });
  }

  signIn() {
    this.visibilityFill = true;
    this.visibilityEmail = true;
    this.visibilityNotYourData = true;
    let reg = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

    if (this.email === undefined || this.password === undefined || this.email === '' || this.password === ''){
      this.visibilityFill = false;
    } else if (!this.email.match(reg)) {
              this.visibilityEmail = false;
            } else {
                let k: number = 0;
                for (let i = this.arrUsers.length - 1; i >= 0; i--) {
                  if (this.email == this.arrUsers[i]['email'] && this.password == this.arrUsers[i]['password']) {
                    this.user = this.arrUsers[i];
                    this.configService.currentUser = this.user;
                    let styleConfig = {
                      color: this.user['color'],
                      bgcolor: this.user['bgcolor'],
                      fontSize: this.user['fontSize']
                    };
                    this.router.navigate(['/admin']);
                    this.configService.setConfigStyle(styleConfig);
                    k = 1;
                    break;
                  }
                }
                if (k == 0) {
                  this.visibilityNotYourData = false;
                }

    }
  }

  signUp() {
    this.visibilityFill = true;
    this.visibilityEmail = true;
    let reg = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    if (this.email === undefined || this.password === undefined || this.email === '' || this.password === ''){
      this.visibilityFill = false;
      } else if (!this.email.match(reg)) {
            this.visibilityEmail = false;
            } else {
                let indexUser: string = (Date.now().toString(36) + Math.random().toString(36).substr(2, 5)).toUpperCase();
                this.user = {
                  'idUser' : indexUser,
                  'email' : this.email,
                  'password' : this.password,
                  'color' : undefined,
                  'bgcolor': undefined,
                  'fontSize': undefined
                };
                this.arrUsers.push(this.user);
                this.configService.currentUser = this.user;
                this.configService.arrUsers = this.arrUsers;
                this.router.navigate(['/admin']);
    }
  }

  // saveLocalUsers() {
  //   this.configService.saveLocalUsers(this.arrUsers);
  // }
}
