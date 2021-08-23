import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsServiciosUsuarioComponent } from './cards-servicios-usuario.component';

describe('CardsServiciosUsuarioComponent', () => {
  let component: CardsServiciosUsuarioComponent;
  let fixture: ComponentFixture<CardsServiciosUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsServiciosUsuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsServiciosUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
