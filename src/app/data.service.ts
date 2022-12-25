import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private allExpansions: Expansion[] = [
    {
			name: 'Dominion',
			art: 'assets/img/expansions/dominion.jpg',
			icon: 'assets/img/icons/dominion.png',
			color: '#8f8a76'
		},
		{
			name: 'Intrigue',
			art: 'assets/img/expansions/intrigue.jpg',
			icon: 'assets/img/icons/intrigue.png',
			color: '#847b7c'
		},
		{
			name: 'Seaside',
			art: 'assets/img/expansions/seaside.jpg',
			icon: 'assets/img/icons/seaside.png',
			color: '#6fa7c2'
		},
		{
			name: 'Alchemy',
			art: 'assets/img/expansions/alchemy.jpg',
			icon: 'assets/img/icons/alchemy.png',
			color: '#8f669e'
		},
		{
			name: 'Prosperity',
			art: 'assets/img/expansions/prosperity.jpg',
			icon: 'assets/img/icons/prosperity.png',
			color: '#b0b161'
		},
		{
			name: 'Cornucopia',
			art: 'assets/img/expansions/cornucopia.jpg',
			icon: 'assets/img/icons/cornucopia.png',
			color: '#e7975c'
		},
		{
			name: 'Hinterlands',
			art: 'assets/img/expansions/hinterlands.jpg',
			icon: 'assets/img/icons/hinterlands.png',
			color: '#65723c'
		},
		{
			name: 'Dark Ages',
			art: 'assets/img/expansions/dark-ages.jpg',
			icon: 'assets/img/icons/dark-ages.png',
			color: '#bb6041'
		},
		{
			name: 'Guilds',
			art: 'assets/img/expansions/guilds.jpg',
			icon: 'assets/img/icons/guilds.png',
			color: '#e1787d'
		},
		{
			name: 'Adventures',
			art: 'assets/img/expansions/adventures.jpg',
			icon: 'assets/img/icons/adventures.png',
			color: '#7a7168'
		},
		{
			name: 'Empires',
			art: 'assets/img/expansions/empires.jpg',
			icon: 'assets/img/icons/empires.png',
			color: '#cba445'
		},
		{
			name: 'Nocturne',
			art: 'assets/img/expansions/nocturne.jpg',
			icon: 'assets/img/icons/nocturne.png',
			color: '#384182'
		},
		{
			name: 'Renaissance',
			art: 'assets/img/expansions/renaissance.jpg',
			icon: 'assets/img/icons/renaissance.png',
			color: '#00aaa1'
		},
		{
			name: 'Menagerie',
			art: 'assets/img/expansions/menagerie.jpg',
			icon: 'assets/img/icons/menagerie.png',
			color: '#947849'
		},
		{
			name: 'Allies',
			art: 'assets/img/expansions/allies.jpg',
			icon: 'assets/img/icons/allies.png',
			color: '#304131'
		},
    {
      name: 'Plunder',
      art: 'assets/img/expansions/plunder.jpg',
      icon: 'assets/img/icons/plunder.png',
      color: '#e99413'
    }
  ];

  constructor() { }

  public getAllExpansions(): Expansion[] {
    return this.allExpansions;
  }
}
