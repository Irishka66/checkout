import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login_comp/login.component';
import { AdminComponent } from './admin_comp/admin.component';
import { EditComponent } from './admin_comp/tabs_comp/edit.component';
import { PasswordComponent } from './admin_comp/tabs_comp/password.component';
import { ExitComponent } from './admin_comp/tabs_comp/exit.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ColorPickerModule } from 'ngx-color-picker';
import { ConfigService } from './services/config.service';
import {Routes, RouterModule} from '@angular/router';
// import {ColorPickerModule} from 'angular2-color-picker';

const appRoutes: Routes =[
  { path: '', component: LoginComponent},
  { path: 'admin', component: AdminComponent},
  { path: '**', component: LoginComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    EditComponent,
    PasswordComponent,
    ExitComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ColorPickerModule,
    RouterModule.forRoot(appRoutes),
    NgbModule.forRoot()
  ],
  providers: [ConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
