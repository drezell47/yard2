import { Injectable } from '@angular/core';

import * as allSets from './data.json';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private sets: DominionSet[] = allSets;

  public getSets(): DominionSet[] {
    return this.sets;
  }
}
