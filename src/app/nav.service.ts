import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SelectionService } from './selection.service';

@Injectable({
  providedIn: 'root'
})
export class NavService {

  footerController: FooterController;

  constructor(
      private selectionService: SelectionService,
      private router: Router) {
    this.footerController = {
      canContinue: () => true,
      clickContinue: () => {
        console.log('Default clickContinue() function called');
      },
      continueText: () => 'Continue',
    };
  }

  public canShowOptions(): boolean {
    return this.selectionService.getSets().length > 0;
  }

  public canShowResult(): boolean {
    return this.selectionService.getNumSets() !== undefined;
  }

  public startOver(): void {
    this.selectionService.reset();
    this.router.navigate(['sets']);
  }

  public setFooterController(footerController: FooterController): void {
    console.log('Setting footer controller');
    this.footerController = footerController;
  }
}
