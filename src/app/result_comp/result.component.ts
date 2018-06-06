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

  public shippingAddress: string;
  public firstName: string;
  public lastName: string;

  ngOnInit() {
    this.shippingAddress = this.configService.currentUser['address'];
    this.firstName = this.configService.currentUser['firstName'];
    this.lastName = this.configService.currentUser['lastName'];
  }
}
