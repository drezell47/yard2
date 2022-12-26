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

  public selectedNumSets: number | undefined;
  public selectedNumLandscapes: number;

  constructor(
      private selectionService: SelectionService,
      private navService: NavService,
      private router: Router) {}

  ngOnInit(): void {
    if (this.navService.canShowOptions()) {
      this.navService.setFooterController(this);
      this.selectedNumSets = this.selectionService.getNumSets();
      this.selectedNumLandscapes = this.selectionService.getNumLandscapes();
    } else {
      this.router.navigate(['sets']);
    }
  }

  public maxNumSets(): number {
    return Math.max(1, Math.min(5, this.selectionService.getSets().length - 1));
  }

  public canHaveLandscapes(): boolean {
    return this.selectionService.canHaveLandscapes();
  }

  public maxNumLandscapes(): number {
    return 4;
  }

  public selectNumSets(numSets: number): void {
    this.selectedNumSets = numSets;
  }

  public selectNumLandscapes(numLandscapes: number): void {
    this.selectedNumLandscapes = numLandscapes;
  }

  public continueText(): string {
    return this.selectedNumSets !== undefined
        ? 'Continue to Result'
        : 'Select a number of sets';
  }

  public clickContinue(): void {
    this.selectionService.selectNumSets(this.selectedNumSets!);

    if (this.canHaveLandscapes()) {
      this.selectionService.selectNumLandscapes(this.selectedNumLandscapes!);
    }

    this.router.navigate(['result'])
  }

  public canContinue(): boolean {
    return this.selectedNumSets !== undefined;
  }
}
