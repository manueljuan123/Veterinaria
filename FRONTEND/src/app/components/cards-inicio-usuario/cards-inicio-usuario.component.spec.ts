import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsInicioUsuarioComponent } from './cards-inicio-usuario.component';

describe('CardsInicioUsuarioComponent', () => {
  let component: CardsInicioUsuarioComponent;
  let fixture: ComponentFixture<CardsInicioUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsInicioUsuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsInicioUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
