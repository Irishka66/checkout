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
  styleUrls: ['./checkout.component.scss']
})

export class CheckoutComponent implements OnInit {
  constructor (private configService: ConfigService,
               private router: Router) {}


  public user: Object = {};
  public firstName: string;
  public lastName: string;
  public userName: string;
  public email: string;
  public address: string;
  public address2: string;
  public selectedCountry: string;
  public selectedState: string;
  public zip: string;
  public haveSameAddress: boolean = false;
  public wantToSaveInfo: boolean = false;
  public payment: string = 'credit';
  public nameOnCard: string;
  public creditCardNumber: string;
  public expiration: string;
  public cvv: string;

  public countries: Array<any> = [
    'United States', 'Australia', 'Canada', 'Brazil','England'
  ];
  public usaStates: Array<any> = [
    'Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California', 'Colorado',
    'Connecticut', 'Delaware', 'District Of Columbia', 'Federated States Of Micronesia', 'Florida', 'Georgia',
    'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine',
    'Marshall Islands', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana',
    'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
    'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico', 'Rhode Island',
    'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virgin Islands', 'Virginia',
    'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
  ];
  public states: Array<any>;
  public stateRequired: boolean = false;
  public emailRequired: boolean = false;
  public patternEmail: boolean = false;

  public arrUsers: Array<any> = [];

  ngOnInit() {
    if(this.configService.currentUser['firstName']) {
      this.user = this.configService.currentUser;
      if(this.user['selectedCountry'] == 'United States') {
        this.states = this.usaStates;
        this.stateRequired = true;
      }
    } else {
      let indexUser: string = (Date.now().toString(36) + Math.random().toString(36).substr(2, 5)).toUpperCase();
      this.user = {
        'idUser': indexUser,
        'firstName' : this.firstName,
        'lastName' : this.lastName,
        'userName' : this.userName,
        'email' : this.email,
        'address' : this.address,
        'address2' : this.address2,
        'selectedCountry' : this.selectedCountry,
        'selectedState' : this.selectedState,
        'zip' : this.zip,
        'haveSameAddress' : this.haveSameAddress,
        'wantToSaveInfo' : this.wantToSaveInfo,
        'payment' : this.payment,
        'nameOnCard' : this.nameOnCard,
        'creditCardNumber' : this.creditCardNumber,
        'expiration' : this.expiration,
        'cvv' : this.cvv,
      };
    }
    console.log(this.user);
  }

  onCountryChange() {
    if(this.user['selectedCountry'] == 'United States') {
      this.states = this.usaStates;
      this.stateRequired = true;
      return;
    }
    this.states = [];
    this.stateRequired = false;
    this.user['selectedState'] = undefined;
  }

  onEmailChange() {
    if(this.user['email'] == '') {
      this.emailRequired = false;
      this.patternEmail = false;
      return;
    }
    this.emailRequired = true;
    this.patternEmail = true;
  }

  checkout() {
    for(let key in this.user) {
      if(typeof this.user[key] == 'string') {
        this.user[key] = this.user[key].trim();
      }
    }
    this.configService.currentUser = this.user;
    if(this.user['wantToSaveInfo'] == true) {
      this.arrUsers.push(this.user);
    } else {
      for (let i = this.arrUsers.length - 1; i >= 0; i--) {
        if (this.user['idUser'] == this.arrUsers[i]['idUser']) {
          this.arrUsers.splice(i,1)
        }
      }
    }
    this.saveLocalUsers();
    this.router.navigate(['/result']);
    console.log(this.user);
  }

  saveLocalUsers() {
    let localUsers = JSON.stringify(this.arrUsers);
    localStorage.setItem('users', localUsers);
  }
}
