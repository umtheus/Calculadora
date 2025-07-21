import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-display',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './display.component.html',
  styleUrl: './display.component.scss',
})
export class DisplayComponent {
  display = '0';
  operadores: string[] = ['+', '*', '-', '/', '%'];

  atualizarDisplay(value: string) {
    this.tratarEntrada(value);
  }

  private del() {
    if (this.display.length <= 1) {
      this.display = '0';
    } else {
      this.display = this.display.slice(0, -1);
    }
  }

  private calculate() {
    const ultima = this.display.slice(-1);
    if (this.operadores.includes(ultima)) {
      this.display = this.display.slice(0, -1);
    }
    try {
      this.display = eval(this.display).toString();
    } catch {
      this.display = 'Error';
    }
  }

  private porcent() {
    try {
      const result = eval(this.display) / 100;
      this.display = result.toString();
    } catch {
      this.display = 'Error';
    }
  }

  private tratarEntrada(value: string) {
    const ultimo = this.display.slice(-1);

    if (value === 'AC') {
      this.del();
      return;
    }

    if (value === 'C') {
      this.display = '0';
      return;
    }

    if (value === '%') {
      this.porcent();
      return;
    }

    if (value === '=') {
      this.calculate();
      return;
    }

    if (this.display === '0' && /\d/.test(value)) {
      this.display = value;
      return;
    }

    if (this.display === '0' && this.operadores.includes(value)) return;
    if (this.display === '' && this.operadores.includes(value)) return;

    if (this.operadores.includes(value) && this.operadores.includes(ultimo)) {
      return;
    }

    if (value === '.') {
      const partes = this.display.split(/[+\-*/%]/);
      const ultimoNumero = partes[partes.length - 1];
      if (ultimoNumero.includes('.')) {
        return;
      }
    }

    this.display += value;
  }
}
