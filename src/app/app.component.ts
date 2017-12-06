import { Component, OnInit, HostListener } from '@angular/core';
import { ConfigService } from './services/config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
 constructor (private configService: ConfigService) {}

 public colorForStyling: string;
 public bgcolorForStyling: string;
 public fontSizeForStyling: string;
 // public defaultColor: string = '#000';
 // public defaultBackground: string = '#fff';
 // public defaultFontSize: string = '16px';

 ngOnInit() {
   // this.colorForStyling = this.configService.currentUserForService['color'];
   // this.bgcolorForStyling = this.configService.currentUserForService['bgcolor'];
   // this.fontSizeForStyling = this.configService.currentUserForService['fontSize'];



   // this.configService.styleConfigStream$.subscribe( (objEdits) => {
   //   console.log(objEdits);
   //   this.colorForStyling = objEdits['color'];
   //   this.bgcolorForStyling = objEdits['bgcolor'];
   //   this.fontSizeForStyling = objEdits['fontSize'];
   // });


   // this.configService.setDefaultStylesStream$.subscribe( () => {
   //   this.colorForStyling = '';
   //   this.bgcolorForStyling = '';
   //   this.fontSizeForStyling = '';
   // });
 }



}
