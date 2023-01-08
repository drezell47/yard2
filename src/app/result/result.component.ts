import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavService } from '../nav.service';
import { SelectionService } from '../selection.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit, NavController {

  public pickedLandscapes: string[];

  constructor(
      private selectionService: SelectionService,
      private navService: NavService,
      private router: Router) {
    this.pickedLandscapes = [];
  }

  ngOnInit(): void {
    if (this.navService.canShowResult()) {
      this.navService.setNavController(this);
      this.randomize();
    } else {
      this.router.navigate(['sets']);
    }
  }

  public canHaveLandscapes(): boolean {
    return this.selectionService.canHaveLandscapes();
  }

  private shuffle<T>(array: T[]) {
    for (let i = array.length; i > 0; i--) {
      let j = Math.floor(Math.random() * i);
      [array[i - 1], array[j]] = [array[j], array[i - 1]];
    }
  }

  public randomize(): void {
    // reset the picked flag on the sets
    const sets = this.selectionService.getSets();
    sets.forEach(set => set.picked = false);

    // figure out how many sets to pick
    let numSetsToPick = this.selectionService.getNumSets();

    // pick the override set first
    const overrideSet = this.selectionService.getOverrideSet();

    // if there is an override set
    if (overrideSet !== undefined) {
      let index = sets.findIndex(set => set.name == overrideSet!.name);
      sets[index].picked = true;
      numSetsToPick -= 1;
    }

    // pick some random sets
    while (numSetsToPick > 0) {
      // pick a random set index
      const index = Math.floor(Math.random() * sets.length);

      // if it's not picked yet
      if (!sets[index].picked) {
        // pick it
        sets[index].picked = true;
        numSetsToPick -= 1;
      }
    }

    // pick some random landscapes
    this.pickedLandscapes = [];
    let landscapes = sets.filter(set => set.picked)
        .flatMap(set => set.landscapes.map(landscape => landscape + ' from ' + set.name));

    const numLandscapesToPick = this.selectionService.getNumLandscapes();

    for (let i = 1; i < numLandscapesToPick; i++) {
      landscapes = landscapes.concat(landscapes);
    }

    this.shuffle(landscapes);
    this.pickedLandscapes = landscapes.splice(0, this.selectionService.getNumLandscapes());
  }

  public pickedSets(): DominionSet[] {
    return this.selectionService.getSets()
        .filter(set => set.picked);
  }

  public showBackButton = () => true;

  public clickBack() {
    this.router.navigate(['options']);
  }

  public clickContinue = this.randomize;
  public continueText = () => 'Randomize Again';
  public canContinue = () => true;
}
