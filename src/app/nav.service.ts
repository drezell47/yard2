import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SelectionService } from './selection.service';

@Injectable({
  providedIn: 'root'
})
export class NavService {

  navController: NavController;

  constructor(
      private selectionService: SelectionService,
      private router: Router) {
    this.navController = {
      showBackButton: () => true,
      clickBack: () => {},
      canContinue: () => true,
      clickContinue: () => {},
      continueText: () => 'Continue',
    };
  }

  public showBackButton(): boolean {
    return this.navController.showBackButton();
  }

  public clickBackButton(): void {
    this.navController.clickBack();
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

  public setNavController(navController: NavController): void {
    this.navController = navController;
  }
}
