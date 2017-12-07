import { Component, OnInit, HostListener, Input, EventEmitter, Output} from '@angular/core';
import { ConfigService } from '../services/config.service';
import { Router } from '@angular/router';

@Component({
  selector: 'admin-comp',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})

export class AdminComponent implements OnInit  {
  // @HostListener('window:beforeunload', ['$event'])
  // beforeunloadHandler() {
  //   this.saveLocalUsers();
  //   // this.router.navigate(['/']);
  // }
  public currentUser: object;
  public stylesConfig: object;
  public colorForStyling: string;
  public bgcolorForStyling: string;
  public fontSizeForStyling: string;
  constructor (private configService: ConfigService,
               private router: Router) {}
  ngOnInit() {
    this.currentUser = this.configService.currentUser;
    this.stylesConfig = {
      color: this.currentUser['color'],
      bgcolor: this.currentUser['bgcolor'],
      fontSize: this.currentUser['fontSize']
    };
    this.setConfigStyles(this.stylesConfig);
    this.configService.styleConfigStream$.subscribe((objEdits) => {
      this.setConfigStyles(objEdits);
    });
  }
  public setConfigStyles(configStyles) {
    this.colorForStyling = configStyles['color'];
    this.bgcolorForStyling = configStyles['bgcolor'];
    this.fontSizeForStyling = configStyles['fontSize'];
  }

  // saveLocalUsers() {
  //   this.configService.saveLocalUsers();
  // }
}
