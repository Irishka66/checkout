import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ConfigService {
  public currentUser: any;
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
    let localUsers = JSON.stringify(this.arrUsers);
    localStorage.setItem('users', localUsers);
  }

  constructor() { }

}
