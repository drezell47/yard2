import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavService } from '../nav.service';
import { SelectionService } from '../selection.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  public isCollapsed: boolean;

  constructor(
      private selectionService: SelectionService,
      private navService: NavService,
      private router: Router) {

    this.isCollapsed = true;
  }

  public showOptions(): boolean {
    return this.navService.canShowOptions();
  }

  public showResult(): boolean {
    return this.navService.canShowResult();
  }

  public startOver(): void {
    this.navService.startOver();
  }
}
