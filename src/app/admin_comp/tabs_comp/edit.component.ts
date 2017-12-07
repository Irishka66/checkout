import { Component, Input, EventEmitter, Output} from '@angular/core';
import { ConfigService } from '../../services/config.service';
// import { ColorPickerModule } from 'ngx-color-picker';
import { ColorPickerService, Rgba } from 'ngx-color-picker';
//
// export class Cmyk {
//   constructor(public c: number, public m: number, public y: number, public k: number) { }
// }

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
    this.configService.setConfigStyle(this.objEdits);
  }
}
