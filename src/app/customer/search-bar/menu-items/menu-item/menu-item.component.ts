import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-customer-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class CustomerMenuItemComponent {
  @Input() show: boolean = true;
  @Output() clickEmitter: EventEmitter<void> = new EventEmitter();
  clickHandler() {
    this.clickEmitter.emit();
  }
}
