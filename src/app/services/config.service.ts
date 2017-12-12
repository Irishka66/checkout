import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ConfigService {
  public currentUser: any;
  public arrUsers: Array<any> = [];
  public indexOfCurrentUser: number;
  public styleConfigSubject = new Subject();
  public styleConfigStream$ = this.styleConfigSubject.asObservable();

  // this method controls changes in edit.component
  public setConfigStyle(objEdits) {
    this.styleConfigSubject.next(objEdits);
  }

  // this method save current arrUsers to local storage
  public saveLocalUsers() {
    let localUsers = JSON.stringify(this.arrUsers);
    localStorage.setItem('users', localUsers);
  }

  constructor() { }
}
