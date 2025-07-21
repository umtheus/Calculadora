import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayComponent } from './display.component';
import { KeypadComponent } from './keypad.component';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [CommonModule, DisplayComponent, KeypadComponent],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.scss',
})
export class CalculatorComponent implements OnInit {
  @ViewChild(DisplayComponent) displayComponent!: DisplayComponent;

  receberValor(valor: string) {
    if (this.displayComponent) {
      this.displayComponent.atualizarDisplay(valor);
    }
  }

  now = new Date();
  hour = '';
  min = '';
  doisPontos = true;

  ngOnInit() {
    setInterval(() => {
      const agora = new Date();
      this.hour = String(agora.getHours()).padStart(2, '0');
      this.min = String(agora.getMinutes()).padStart(2, '0');
      this.doisPontos = !this.doisPontos;
    }, 1000);
  }

  dataFormatada = this.now.toLocaleDateString('pt-BR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}
