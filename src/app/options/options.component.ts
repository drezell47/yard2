import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavService } from '../nav.service';
import { SelectionService } from '../selection.service';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss']
})
export class OptionsComponent implements OnInit, FooterController {

  public selectedNumExpansions: number | undefined;

  constructor(
      private selectionService: SelectionService,
      private navService: NavService,
      private router: Router) {}

  ngOnInit(): void {
    if (this.navService.canShowOptions()) {
      this.navService.setFooterController(this);
      this.selectedNumExpansions = this.selectionService.getNumExpansions();
    } else {
      this.router.navigate(['expansions']);
    }
  }

  public maxNumExpansions(): number {
    return Math.max(1, Math.min(10, this.selectionService.getExpansions().length - 1));
  }

  public selectNumExpansions(numExpansions: number): void {
    this.selectedNumExpansions = numExpansions;
  }

  public continueText(): string {
    return this.selectedNumExpansions
        ? 'Continue'
        : 'Select a number of expansions';
  }

  public clickContinue(): void {
    this.selectionService.selectNumExpansions(this.selectedNumExpansions!);
    this.router.navigate(['/result'])
  }

  public canContinue(): boolean {
    return this.selectedNumExpansions !== undefined;
  }
}
