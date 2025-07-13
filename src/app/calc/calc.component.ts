import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-calc',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './calc.component.html',
  styleUrl: './calc.component.scss',
})
export class CalcComponent {
  now = new Date();
  hour = '';
  min = '';
  doisPontos = true;
  display = '0';
  operadores = ['+', '*', '-', '/', '%'];
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

  append(value: string) {
    const ultimo = this.display.slice(-1);

    if (this.display === '0' && value === '0') {
      return;
    }
    if (this.display === '0' && /\d/.test(value)) {
      this.display = value;
      return;
    }
    // Se o display for '0' e o valor for operador, ignora
    if (this.display === '0' && this.operadores.includes(value)) return;

    // Se o display estiver vazio e o valor for operador, ignora
    if (this.display === '' && this.operadores.includes(value)) return;

    // Bloqueia duplicidade de operadores
    if (this.operadores.includes(value) && this.operadores.includes(ultimo)) {
      return;
    }
    // Bloqueia varios pontos no mesmo numero
    if (value === '.') {
      const partes = this.display.split(/[\+\-\*\/\%]/); // vai separar pelos operadores
      const ultimoNumero = partes[partes.length - 1];
      if (ultimoNumero.includes('.')) {
        return;
      }
    }

    this.display += value;
  }
  porcent() {
    try {
      const result = eval(this.display) / 100;
      this.display = result.toString();
    } catch {
      this.display = 'Error';
    }
  }

  del() {
    if (this.display === '0') {
      return;
    }
    this.display = this.display.slice(0, -1);

    if (this.display === '') {
      //
      this.display = '0';
    }
  }

  clear() {
    this.display = '0';
  }

  calculate() {
    const ultima = this.display.slice(-1); //Pega o ultimo valor do display

    if (this.operadores.includes(ultima)) {
      // Se o valor do display terminar em um operador, vai remover o operador
      this.display = this.display.slice(0, -1);
    }
    try {
      this.display = eval(this.display).toString();
    } catch {
      this.display = 'Error';
    }
  }

  caracters = [
    { label: 'C', value: 'C' },
    { label: '<=', value: 'AC' },
    { label: '%', value: '%' },
    { label: '/', value: '/' },
    { label: '7', value: '7' },
    { label: '8', value: '8' },
    { label: '9', value: '9' },
    { label: 'X', value: '*' },
    { label: '4', value: '4' },
    { label: '5', value: '5' },
    { label: '6', value: '6' },
    { label: '-', value: '-' },
    { label: '1', value: '1' },
    { label: '2', value: '2' },
    { label: '3', value: '3' },
    { label: '+', value: '+' },
    { label: '0', value: '0' },
    { label: '.', value: '.' },
    { label: '=', value: '=' },
  ];
}
