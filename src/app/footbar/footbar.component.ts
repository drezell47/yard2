import { Component } from '@angular/core';
import { NavService } from '../nav.service';

@Component({
  selector: 'footbar',
  templateUrl: './footbar.component.html',
  styleUrls: ['./footbar.component.scss']
})
export class FootbarComponent {

  constructor(private navService: NavService) {}

  public clickContinue(): void {
    this.navService.footerController.clickContinue();
  }

  public disableContinue(): boolean {
    return !this.navService.footerController.canContinue();
  }

  public continueText(): string {
    return this.navService.footerController.continueText();
  }
}
