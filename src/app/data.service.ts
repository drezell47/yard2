import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private allSets: DominionSet[] = [
    {
			name: 'Dominion',
			art: 'assets/img/sets/dominion.jpg',
			icon: 'assets/img/icons/dominion.png',
			color: '#8B8472',
      landscapes: [],
		},
		{
			name: 'Intrigue',
			art: 'assets/img/sets/intrigue.jpg',
			icon: 'assets/img/icons/intrigue.png',
			color: '#918B8B',
      landscapes: [],
		},
		{
			name: 'Seaside',
			art: 'assets/img/sets/seaside.jpg',
			icon: 'assets/img/icons/seaside.png',
			color: '#46C2F0',
      landscapes: [],
		},
		{
			name: 'Alchemy',
			art: 'assets/img/sets/alchemy.jpg',
			icon: 'assets/img/icons/alchemy.png',
			color: '#7759A3',
      landscapes: [],
		},
		{
			name: 'Prosperity',
			art: 'assets/img/sets/prosperity.jpg',
			icon: 'assets/img/icons/prosperity.png',
			color: '#ADAC5A',
      landscapes: [],
		},
		{
			name: 'Cornucopia',
			art: 'assets/img/sets/cornucopia.jpg',
			icon: 'assets/img/icons/cornucopia.png',
			color: '#DDAE73',
      landscapes: [],
		},
		{
			name: 'Hinterlands',
			art: 'assets/img/sets/hinterlands.jpg',
			icon: 'assets/img/icons/hinterlands.png',
			color: '#8EB15F',
      landscapes: [],
		},
		{
			name: 'Dark Ages',
			art: 'assets/img/sets/dark-ages.jpg',
			icon: 'assets/img/icons/dark-ages.png',
			color: '#CD6E32',
      landscapes: [],
		},
		{
			name: 'Guilds',
			art: 'assets/img/sets/guilds.jpg',
			icon: 'assets/img/icons/guilds.png',
			color: '#F3888A',
      landscapes: [],
		},
		{
			name: 'Adventures',
			art: 'assets/img/sets/adventures.jpg',
			icon: 'assets/img/icons/adventures.png',
			color: '#706A6A',
      landscapes: ['Event'],
		},
		{
			name: 'Empires',
			art: 'assets/img/sets/empires.jpg',
			icon: 'assets/img/icons/empires.png',
			color: '#CC8E3B',
      landscapes: ['Landmark', 'Event'],
		},
		{
			name: 'Nocturne',
			art: 'assets/img/sets/nocturne.jpg',
			icon: 'assets/img/icons/nocturne.png',
			color: '#29467E',
      landscapes: [],
		},
		{
			name: 'Renaissance',
			art: 'assets/img/sets/renaissance.jpg',
			icon: 'assets/img/icons/renaissance.png',
			color: '#3DA4A5',
      landscapes: ['Project'],
		},
		{
			name: 'Menagerie',
			art: 'assets/img/sets/menagerie.jpg',
			icon: 'assets/img/icons/menagerie.png',
			color: '#9F7F4C',
      landscapes: ['Way', 'Event'],
		},
		{
			name: 'Allies',
			art: 'assets/img/sets/allies.jpg',
			icon: 'assets/img/icons/allies.png',
			color: '#235A3A',
      landscapes: [],
		},
    {
      name: 'Plunder',
      art: 'assets/img/sets/plunder.jpg',
      icon: 'assets/img/icons/plunder.png',
      color: '#E99413',
      landscapes: ['Trait', 'Event'],
    }
  ];

  constructor() { }

  public getAllSets(): DominionSet[] {
    return this.allSets;
  }
}
