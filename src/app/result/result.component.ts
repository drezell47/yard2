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
  public pickedLandmarks: string[];

  constructor(
      private selectionService: SelectionService,
      private navService: NavService,
      private router: Router) {
    this.pickedSets = [];
    this.pickedLandmarks = [];
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
    this.pickedLandmarks = [];

    // pick some random sets
    let sets = Object.assign([], this.selectionService.getSets());
    this.shuffle(sets);
    this.pickedSets = sets.splice(0, this.selectionService.getNumSets());

    // pick some random landmarks
    let landmarks = this.pickedSets.flatMap(set => set.landscapes.map(landscape => landscape + ' from ' + set.name));
    landmarks = landmarks.concat(landmarks);
    this.shuffle(landmarks);
    this.pickedLandmarks = landmarks.splice(0, 2);
  }

  public clickContinue = this.randomize;
  public continueText = () => 'Randomize Again';
  public canContinue = () => true;
}
