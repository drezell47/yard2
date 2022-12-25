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

  public pickedExpansions: Expansion[];

  constructor(
      private selectionService: SelectionService,
      private navService: NavService,
      private router: Router) {
    this.pickedExpansions = [];
  }

  ngOnInit(): void {
    if (this.navService.canShowResult()) {
      this.navService.setFooterController(this);
      this.randomize();
    } else {
      this.router.navigate(['expansions']);
    }
  }

  public randomize(): void {
    let expansions = Object.assign([], this.selectionService.getExpansions());

    // shuffle the expansions randomly
    for (let i = expansions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i - 1));
      [expansions[i], expansions[j]] = [expansions[j], expansions[i]];
    }

    this.pickedExpansions = expansions.splice(0, this.selectionService.getNumExpansions());
  }

  public clickContinue = this.randomize;
  public continueText = () => 'Randomize Again';
  public canContinue = () => true;
}
