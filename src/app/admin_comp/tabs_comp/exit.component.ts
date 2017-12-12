import { Component } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { ConfigService } from '../../services/config.service';


@Component({
  selector: 'exit-comp',
  templateUrl: './exit.component.html',
  styleUrls: ['./exit.component.css'],
})

export class ExitComponent {

  constructor(private modalService: NgbModal,
              private configService: ConfigService,
              private router: Router) {}
// this method is for modal window from bootstrap
  open(content) {
    this.modalService.open(content);
  }

  logout() {
    this.router.navigate(['/']);
  }
}
