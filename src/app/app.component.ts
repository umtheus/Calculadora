import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CalculatorComponent } from './calculator/calculator.component';

@Component({
  standalone: true,
  imports: [RouterModule, CalculatorComponent, CalculatorComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'calculator';
}
