import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { ReactiveFormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { CheckoutComponent } from './checkout_comp/checkout.component';
import { ResultComponent } from './result_comp/result.component';


import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ColorPickerModule } from 'ngx-color-picker';
import { ConfigService } from './services/config.service';
import {Routes, RouterModule} from '@angular/router';

const appRoutes: Routes =[
  { path: '', component: CheckoutComponent},
  { path: 'result', component: ResultComponent},
  { path: '**', component: CheckoutComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    CheckoutComponent,
    ResultComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,

    ReactiveFormsModule,

    ColorPickerModule,
    RouterModule.forRoot(appRoutes),
    NgbModule.forRoot()
  ],
  providers: [ConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
