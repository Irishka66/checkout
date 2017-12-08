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

  // this method controls changes in edit.component
  public setConfigStyle(objEdits) {
    this.styleConfigSubject.next(objEdits);
  }

  // this method save current arrUsers to local storage
  public saveLocalUsers() {
    this.currentUser['password'] = this.currentPassword;
    this.arrUsers.push(this.currentUser);
    // I should take the last version of user's data and I should delete all dublicates
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
