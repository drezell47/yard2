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

    // pick some random sets
    let sets = Object.assign([], this.selectionService.getSets());
    this.shuffle(sets);
    this.pickedSets = sets.splice(0, this.selectionService.getNumSets());

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
