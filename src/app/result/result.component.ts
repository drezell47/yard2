import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavService } from '../nav.service';
import { SelectionService } from '../selection.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit, FooterController {

  public pickedSets: DominionSet[];
  public overrideSet: DominionSet | undefined;
  public pickedLandscapes: string[];

  constructor(
      private selectionService: SelectionService,
      private navService: NavService,
      private router: Router) {
    this.pickedSets = [];
    this.pickedLandscapes = [];
  }

  ngOnInit(): void {
    if (this.navService.canShowResult()) {
      this.navService.setFooterController(this);
      this.randomize();
    } else {
      this.router.navigate(['sets']);
    }
  }

  private shuffle<T>(array: T[]) {
    for (let i = array.length; i > 0; i--) {
      let j = Math.floor(Math.random() * i);
      [array[i - 1], array[j]] = [array[j], array[i - 1]];
    }
  }

  public randomize(): void {
    this.pickedSets = [];
    this.pickedLandscapes = [];

    // pick the override set first
    this.overrideSet = this.selectionService.getOverrideSet();
    let sets = Object.assign([], this.selectionService.getSets()
        .filter(set => this.overrideSet === undefined || set.name !== this.overrideSet.name));

    let numToPick = this.selectionService.getNumSets()!;

    if (this.overrideSet) {
      this.pickedSets.push(this.overrideSet);
      numToPick -= 1;
    }

    // pick some random sets
    this.shuffle(sets);
    this.pickedSets = this.pickedSets.concat(sets.splice(0, numToPick));

    // pick some random landscapes
    let landscapes = this.pickedSets.flatMap(set => set.landscapes.map(landscape => landscape + ' from ' + set.name));
    landscapes = landscapes.concat(landscapes);
    this.shuffle(landscapes);
    this.pickedLandscapes = landscapes.splice(0, this.selectionService.getNumLandscapes());
  }

  public clickContinue = this.randomize;
  public continueText = () => 'Randomize Again';
  public canContinue = () => true;
}
