import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ConfigService {
  public currentUser: any;
  public currentPassword: any;
  public arrUsers: Array<any> = [];
  public styleConfigSubject = new Subject();
  public styleConfigStream$ = this.styleConfigSubject.asObservable();
  public setDefaultStylesSubject = new Subject();
  public setDefaultStylesStream$ = this.styleConfigSubject.asObservable();

  public setConfigStyle(objEdits) {
    this.styleConfigSubject.next(objEdits);
  }

  public setDefaultStyles() {
    // this.setDefaultStylesSubject.next();
    this.styleConfigSubject.next({color:'', bgcolor: '', fontSize: ''});
  }

  public saveLocalUsers() {
    this.currentUser['password'] = this.currentPassword; //add
    this.arrUsers.push(this.currentUser); //add
    for (let i = this.arrUsers.length - 1; i >= 0; i--) {
      for (let j = i - 1; j >= 0; j--) {
        if (this.arrUsers[i]['idUser'] == this.arrUsers[j]['idUser']) {
          this.arrUsers.splice(j, 1);
          i--;
        }
      }
    }
    let localUsers = JSON.stringify(this.arrUsers);
    localStorage.setItem('users', localUsers);
  }

  constructor() { }

}
