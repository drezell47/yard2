import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SelectionService {

  private sets: DominionSet[];
  private options: Options;

  constructor() {
    this.reset();
  }

  public getSets(): DominionSet[] {
    return this.sets;
  }

  public selectSets(sets: DominionSet[]): void {
    this.sets = sets;

    // reset the options
    this.options = {
      numLandscapes: 0
    };
  }

  public getOverrideSet(): DominionSet | undefined {
    return this.options.overrideSet;
  }

  public getNumSets(): number | undefined {
    return this.options.numSets;
  }

  public getNumLandscapes(): number {
    return this.options.numLandscapes;
  }

  public canHaveLandscapes(): boolean {
    return this.sets.flatMap(set => set.landscapes).length > 0;
  }

  public selectOverrideSet(set: DominionSet): void {
    this.options.overrideSet = set;
  }

  public unselectOverrideSet(): void {
    this.options.overrideSet = undefined;
  }

  public selectNumSets(numSets: number): void {
    this.options.numSets = numSets;
  }

  public selectNumLandscapes(numLandscapes: number): void {
    this.options.numLandscapes = numLandscapes;
  }

  public reset(): void {
    this.sets = [];
    this.options = {
      numLandscapes: 0
    };
  }
}
