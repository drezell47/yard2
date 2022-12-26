import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card[card]',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input()
  card: CardShaped;

  @Output()
  click = new EventEmitter<void>();

  large: boolean;

  @Input('large')
  set isLarge(large: boolean | '') {
    this.large = large === '' || large;
  }
}
