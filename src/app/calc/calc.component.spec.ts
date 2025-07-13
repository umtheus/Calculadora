import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CalcComponent } from './calc.component';
import { By } from '@angular/platform-browser';

describe('CalcComponent', () => {
  let component: CalcComponent;
  let fixture: ComponentFixture<CalcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalcComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve adicionar operador apos um numero valido', () => {
    component.display = '2';
    component.append('+');
    expect(component.display).toBe('2+');
  });
  it('deve calcular expressoes validas', () => {
    component.display = '2';
    component.append('+');
    component.append('2');
    component.calculate();
    expect(component.display).toBe('4');
  });
  it('deve limpar o display', () => {
    component.display = '2';
    component.clear();
    expect(component.display).toBe('0');
  });

  it('deve retornar erro para expressao invalida', () => {
    component.display = '5++5';
    component.calculate();
    expect(component.display).toBe('Error');
  });
  it('deve excluir ultimo caractere', () => {
    component.display = '123';
    component.del();
    expect(component.display).toBe('12');
  });
  it('deve atualizar display ao clicar no botao 1', () => {
    const botao1 = fixture.debugElement
      .queryAll(By.css('button'))
      .find((el) => el.nativeElement.textContent.trim() === '1');

    expect(botao1).toBeTruthy();

    botao1?.nativeElement.click();
    fixture.detectChanges(); //vai atualizar o a tela do component depois de clicar

    expect(component.display).toBe('1');
  });
});
