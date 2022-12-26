import { Component, TemplateRef } from '@angular/core';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { NavService } from '../nav.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(
      public navService: NavService,
      private offcanvasService: NgbOffcanvas) {
  }

  public openOffcanvas(content: TemplateRef<NavbarComponent>): void {
    this.offcanvasService.open(content, {
      position: 'end',
      panelClass: 'text-bg-dark',
      container: '#offcanvasContainer'
    });
  }
}
