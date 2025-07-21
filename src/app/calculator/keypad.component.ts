import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-keypad',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './keypad.component.html',
  styleUrl: './keypad.component.scss',
})
export class KeypadComponent {
  @Output() teclaPressionada = new EventEmitter<string>();
  onClick(value: string) {
    this.teclaPressionada.emit(value);
  }
}
