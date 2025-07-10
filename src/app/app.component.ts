import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CalcComponent } from './calc/calc.component';

@Component({
  standalone: true,
  imports: [RouterModule, CalcComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'calculator';
}
