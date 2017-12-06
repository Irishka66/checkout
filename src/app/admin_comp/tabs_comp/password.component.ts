import { Component, Input, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'password-comp',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})

export class PasswordComponent {
  public visibilityOldPassword: boolean = true;
  public visibilityNewPasswords: boolean = true;
  public visibilityFillPasswords: boolean = true;
  public visibilitySuccessMessage: boolean = true;
  public oldPassword: string = undefined;
  public newPassword1: string = undefined;
  public newPassword2: string = undefined;

  changePassword(){
    // if (this.newPassword1 !== this.newPassword2){
    //   this.visibilityNewPasswords = false;
    // }

    this.visibilityFillPasswords = true;
    this.visibilityNewPasswords = true;
    this.visibilityOldPassword = true;
    this.visibilitySuccessMessage = true;



    if (this.oldPassword === undefined || this.newPassword1 === undefined || this.newPassword2 === undefined
      || this.oldPassword === '' || this.newPassword1 === '' || this.newPassword2 === ''){
      this.visibilityFillPasswords = false;
    } else if (this.oldPassword === '1'){ // here should be this.oldPassword !== this.currentUserPassword
                this.visibilityOldPassword = false;
              } else if (this.newPassword1 !== this.newPassword2){
                        this.visibilityNewPasswords = false;
                      } else {
                        this.visibilitySuccessMessage = false;
                        // here you should push new password to arrUsers
                      }



  }
}
