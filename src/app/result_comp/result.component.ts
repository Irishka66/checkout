import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../services/config.service';
import { Router } from '@angular/router';

@Component({
  selector: 'result-comp',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})

export class ResultComponent implements OnInit {
  constructor (private configService: ConfigService,
               private router: Router) {}

  public shippingAddress: string = '';
  public firstName: string = '';
  public lastName: string = '';

  ngOnInit() {
    this.shippingAddress = this.configService.currentUser['address'];
    this.firstName = this.configService.currentUser['firstName'];
    this.lastName = this.configService.currentUser['lastName'];
  }

  // public currentUser: object;
  // public stylesConfig: object;
  // public colorForStyling: string;
  // public bgcolorForStyling: string;
  // public fontSizeForStyling: string;
  //
  // constructor (private configService: ConfigService,
  //              private router: Router) {}
  //
  // ngOnInit() {
  //   // taking current user from service
  //   this.currentUser = this.configService.currentUser;
  //   this.stylesConfig = {
  //     color: this.currentUser['color'],
  //     bgcolor: this.currentUser['bgcolor'],
  //     fontSize: this.currentUser['fontSize']
  //   };
  //   // set styles of just sign-in-user with the help of service in admin-panel
  //   this.setConfigStyles(this.stylesConfig);
  //   // set styles of user who changes something in edit-panel
  //   this.configService.styleConfigStream$.subscribe((objEdits) => {
  //     this.setConfigStyles(objEdits);
  //   });
  // }
  // public setConfigStyles(configStyles) {
  //   this.colorForStyling = configStyles['color'];
  //   this.bgcolorForStyling = configStyles['bgcolor'];
  //   this.fontSizeForStyling = configStyles['fontSize'];
  // }
}
