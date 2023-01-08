import { Component } from '@angular/core';
import { NavService } from '../nav.service';

@Component({
  selector: 'app-footbar',
  templateUrl: './footbar.component.html',
  styleUrls: ['./footbar.component.scss']
})
export class FootbarComponent {

  public version: string = '2.3';

  constructor(private navService: NavService) {}

  public clickContinue(): void {
    this.navService.navController.clickContinue();
  }

  public disableContinue(): boolean {
    return !this.navService.navController.canContinue();
  }

  public continueText(): string {
    return this.navService.navController.continueText();
  }
}
