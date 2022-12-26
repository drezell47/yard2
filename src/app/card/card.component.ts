import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card[set]',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input()
  set: DominionSet;

  @Output()
  click = new EventEmitter<void>();

  large: boolean;

  @Input('large')
  set isLarge(large: boolean | '') {
    this.large = large === '' || large;
  }
}
