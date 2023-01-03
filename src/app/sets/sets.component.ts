import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { NavService } from '../nav.service';
import { SelectionService } from '../selection.service';

@Component({
  selector: 'app-sets',
  templateUrl: './sets.component.html',
  styleUrls: ['./sets.component.scss']
})
export class SetsComponent implements OnInit, NavController {

  private sets: DominionSet[];

  constructor(
        private dataService: DataService,
        private selectionService: SelectionService,
        private router: Router,
        private navService: NavService) {
    this.sets = Object.assign([], this.dataService.getSets());
  }

  ngOnInit(): void {
    this.navService.setNavController(this);
    this.unselectAll();

    this.selectionService.getSets().forEach(set => {
      this.sets.find(e => e.name == set.name)!.selected = true;
    });
  }

  public selectedSets(): DominionSet[] {
    return this.sets.filter(set => set.selected);
  }

  public unselectedSets(): DominionSet[] {
    return this.sets.filter(set => !set.selected);
  }

  public select(set: DominionSet): void {
    set.selected = true;
  }

  public selectAll(): void {
    this.sets.forEach(this.select);
  }

  public unselect(set: DominionSet): void {
    set.selected = false;
  }

  public unselectAll(): void {
    this.sets.forEach(set => set.selected = false);
  }

  public showBackButton = () => false;

  public clickBack = () => {};

  public continueText(): string {
    return this.canContinue()
        ? 'Continue to Options'
        : 'Pick at least 2 sets';
  }

  public clickContinue(): void {
    this.selectionService.selectSets(this.selectedSets());
    this.router.navigate(['options'])
  }

  public canContinue(): boolean {
    return this.selectedSets().length > 1;
  }
}
