import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavService } from '../nav.service';
import { SelectionService } from '../selection.service';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss']
})
export class OptionsComponent implements OnInit, NavController {

  public selectedNumSets: number | undefined;
  public selectedNumLandscapes: number;

  constructor(
      private selectionService: SelectionService,
      private navService: NavService,
      private router: Router) {}

  ngOnInit(): void {
    if (this.navService.canShowOptions()) {
      this.navService.setNavController(this);
      this.selectedNumSets = this.selectionService.getNumSets();
      this.selectedNumLandscapes = this.selectionService.getNumLandscapes();
    } else {
      this.router.navigate(['sets']);
    }
  }

  public overrideSet(): DominionSet | undefined {
    return this.selectionService.getOverrideSet();
  }

  public selectedSets(): DominionSet[] {
    return this.selectionService.getSets()
        .filter(set => this.overrideSet() === undefined || this.overrideSet()!.name !== set.name);
  }

  public selectOverrideSet(set: DominionSet): void {
    this.selectionService.selectOverrideSet(set);
  }

  public unselectOverrideSet(): void {
    this.selectionService.unselectOverrideSet();
  }

  public maxNumSets(): number {
    return Math.max(1, Math.min(5, this.selectionService.getSets().length));
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

  public showBackButton = () => true;

  public clickBack() {
    this.router.navigate(['sets']);
  }

  public continueText = () => 'Continue to Result';

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
