import { Component, Input, EventEmitter, Output} from '@angular/core';
import { ConfigService } from '../../services/config.service';
import { ColorPickerService, Rgba } from 'ngx-color-picker';

@Component({
  selector: 'edit-comp',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})

export class EditComponent {
  public bgcolor: string;
  public color: string;
  public fontSize: string;
  public objEdits: Object = {};

  constructor (private configService: ConfigService) {
  }

  saveChanges() {
    console.log(this.bgcolor);
    this.objEdits = {
      'bgcolor' : this.bgcolor,
      'color' : this.color,
      'fontSize' : this.fontSize
    };
    // put edit-data to service
    this.configService.setConfigStyle(this.objEdits);
  }
}
