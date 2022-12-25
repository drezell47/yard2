import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SelectionService {

  private expansions: Expansion[];
  private options: Options;

  constructor() {
    this.expansions = [];
    this.options = {};
  }

  public getExpansions(): Expansion[] {
    return this.expansions;
  }

  public selectExpansions(expansions: Expansion[]): void {
    this.expansions = expansions;
    this.options = {};
  }

  public getNumExpansions(): number | undefined {
    return this.options.numExpansions;
  }

  public selectNumExpansions(numExpansions: number): void {
    this.options.numExpansions = numExpansions;
  }

  public reset(): void {
    this.expansions = [];
    this.options = {};
  }
}
