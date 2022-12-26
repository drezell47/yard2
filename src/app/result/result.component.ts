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

  constructor(
      private selectionService: SelectionService,
      private navService: NavService,
      private router: Router) {
    this.pickedSets = [];
  }

  ngOnInit(): void {
    if (this.navService.canShowResult()) {
      this.navService.setFooterController(this);
      this.randomize();
    } else {
      this.router.navigate(['sets']);
    }
  }

  public randomize(): void {
    let sets = Object.assign([], this.selectionService.getSets());

    for (let i = sets.length; i > 0; i--) {
      let j = Math.floor(Math.random() * i);
      [sets[i - 1], sets[j]] = [sets[j], sets[i - 1]];
    }

    this.pickedSets = sets.splice(0, this.selectionService.getNumSets());
  }

  public clickContinue = this.randomize;
  public continueText = () => 'Randomize Again';
  public canContinue = () => true;
}
