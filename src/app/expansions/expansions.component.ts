import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { NavService } from '../nav.service';
import { SelectionService } from '../selection.service';

@Component({
  selector: 'app-expansions',
  templateUrl: './expansions.component.html',
  styleUrls: ['./expansions.component.scss']
})
export class ExpansionsComponent implements OnInit, FooterController {

  private expansions: Expansion[];

  constructor(
        private dataService: DataService,
        private selectionService: SelectionService,
        private router: Router,
        private navService: NavService) {
    this.expansions = Object.assign([], this.dataService.getAllExpansions());
  }

  ngOnInit(): void {
    this.navService.setFooterController(this);
    this.unselectAll();

    this.selectionService.getExpansions().forEach(expansion => {
      this.expansions.find(e => e.name == expansion.name)!.selected = true;
    });
  }

  public selectedExpansions(): Expansion[] {
    return this.expansions.filter(expansion => expansion.selected);
  }

  public unselectedExpansions(): Expansion[] {
    return this.expansions.filter(expansion => !expansion.selected);
  }

  public select(expansion: Expansion): void {
    expansion.selected = true;
  }

  public selectAll(): void {
    this.expansions.forEach(this.select);
  }

  public unselect(expansion: Expansion): void {
    expansion.selected = false;
  }

  public unselectAll(): void {
    this.expansions.forEach(expansion => expansion.selected = false);
  }

  public continueText(): string {
    return this.selectedExpansions().length > 1
        ? 'Continue'
        : 'Select at least 2 expansions';
  }

  public clickContinue(): void {
    this.selectionService.selectExpansions(this.selectedExpansions());
    this.router.navigate(['/options'])
  }

  public canContinue(): boolean {
    return this.selectedExpansions().length > 1;
  }
}
