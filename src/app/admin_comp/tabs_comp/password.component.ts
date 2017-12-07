import { Component, Input, EventEmitter, Output} from '@angular/core';
import { ConfigService } from '../../services/config.service';

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

  constructor (private configService: ConfigService) {
  }

  changePassword(){
    this.visibilityFillPasswords = true;
    this.visibilityNewPasswords = true;
    this.visibilityOldPassword = true;
    this.visibilitySuccessMessage = true;
    if (this.oldPassword === undefined || this.newPassword1 === undefined || this.newPassword2 === undefined
      || this.oldPassword === '' || this.newPassword1 === '' || this.newPassword2 === ''){
      this.visibilityFillPasswords = false;
    } else if (this.oldPassword !== this.configService.currentPassword){
                this.visibilityOldPassword = false;
              } else if (this.newPassword1 !== this.newPassword2){
                        this.visibilityNewPasswords = false;
                      } else {
                        this.visibilitySuccessMessage = false;
                        this.configService.currentPassword = this.newPassword1;
                        this.configService.currentUser['password'] = this.newPassword1;
                        this.configService.arrUsers.push(this.configService.currentUser);
                        this.configService.saveLocalUsers();
                      }
  }
}
