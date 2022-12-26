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
			color: '#8B8472'
		},
		{
			name: 'Intrigue',
			art: 'assets/img/sets/intrigue.jpg',
			icon: 'assets/img/icons/intrigue.png',
			color: '#918B8B'
		},
		{
			name: 'Seaside',
			art: 'assets/img/sets/seaside.jpg',
			icon: 'assets/img/icons/seaside.png',
			color: '#46C2F0'
		},
		{
			name: 'Alchemy',
			art: 'assets/img/sets/alchemy.jpg',
			icon: 'assets/img/icons/alchemy.png',
			color: '#7759A3'
		},
		{
			name: 'Prosperity',
			art: 'assets/img/sets/prosperity.jpg',
			icon: 'assets/img/icons/prosperity.png',
			color: '#ADAC5A'
		},
		{
			name: 'Cornucopia',
			art: 'assets/img/sets/cornucopia.jpg',
			icon: 'assets/img/icons/cornucopia.png',
			color: '#DDAE73'
		},
		{
			name: 'Hinterlands',
			art: 'assets/img/sets/hinterlands.jpg',
			icon: 'assets/img/icons/hinterlands.png',
			color: '#8EB15F'
		},
		{
			name: 'Dark Ages',
			art: 'assets/img/sets/dark-ages.jpg',
			icon: 'assets/img/icons/dark-ages.png',
			color: '#CD6E32'
		},
		{
			name: 'Guilds',
			art: 'assets/img/sets/guilds.jpg',
			icon: 'assets/img/icons/guilds.png',
			color: '#F3888A'
		},
		{
			name: 'Adventures',
			art: 'assets/img/sets/adventures.jpg',
			icon: 'assets/img/icons/adventures.png',
			color: '#706A6A'
		},
		{
			name: 'Empires',
			art: 'assets/img/sets/empires.jpg',
			icon: 'assets/img/icons/empires.png',
			color: '#CC8E3B'
		},
		{
			name: 'Nocturne',
			art: 'assets/img/sets/nocturne.jpg',
			icon: 'assets/img/icons/nocturne.png',
			color: '#29467E'
		},
		{
			name: 'Renaissance',
			art: 'assets/img/sets/renaissance.jpg',
			icon: 'assets/img/icons/renaissance.png',
			color: '#3DA4A5'
		},
		{
			name: 'Menagerie',
			art: 'assets/img/sets/menagerie.jpg',
			icon: 'assets/img/icons/menagerie.png',
			color: '#9F7F4C'
		},
		{
			name: 'Allies',
			art: 'assets/img/sets/allies.jpg',
			icon: 'assets/img/icons/allies.png',
			color: '#235A3A'
		},
    {
      name: 'Plunder',
      art: 'assets/img/sets/plunder.jpg',
      icon: 'assets/img/icons/plunder.png',
      color: '#E99413'
    }
  ];

  constructor() { }

  public getAllSets(): DominionSet[] {
    return this.allSets;
  }
}
