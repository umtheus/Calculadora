import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DisplayComponent } from './display.component';

describe('DisplayComponent', () => {
  let component: DisplayComponent;
  let fixture: ComponentFixture<DisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve atualizar o display ao inserir um numero valido', () => {
    component.atualizarDisplay('7');
    expect(component.display).toBe('7');
  });
  it('deve iniciar com 0', () => {
    expect(component.display).toBe('0');
  });
  it('nao deve permetir operadores duplicados', () => {
    component.atualizarDisplay('1');
    component.atualizarDisplay('+');
    component.atualizarDisplay('+');
    expect(component.display).toBe('1+');
  });
  it('deve limpar o display', () => {
    component.atualizarDisplay('1');
    component.atualizarDisplay('+');
    component.atualizarDisplay('C');
    expect(component.display).toBe('0');
  });
  it('deve apagar o ultimo caractere ao precionar o AC', () => {
    component.atualizarDisplay('2');
    component.atualizarDisplay('-');
    component.atualizarDisplay('AC');
    expect(component.display).toBe('2');
  });

  it('deve aplicar porcentagem corretamente', () => {
    component.atualizarDisplay('10');
    component.atualizarDisplay('%');
    expect(component.display).toBe('0.1');
  });
});
