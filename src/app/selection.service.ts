import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SelectionService {

  private sets: DominionSet[];
  private options: Options;

  constructor() {
    this.sets = [];
    this.options = {};
  }

  public getSets(): DominionSet[] {
    return this.sets;
  }

  public selectSets(sets: DominionSet[]): void {
    this.sets = sets;
    this.options = {};
  }

  public getNumSets(): number | undefined {
    return this.options.numSets;
  }

  public selectNumSets(numSets: number): void {
    this.options.numSets = numSets;
  }

  public reset(): void {
    this.sets = [];
    this.options = {};
  }
}
