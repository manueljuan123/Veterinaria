import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarruselVeterinarioComponent } from './carrusel-veterinario.component';

describe('CarruselVeterinarioComponent', () => {
  let component: CarruselVeterinarioComponent;
  let fixture: ComponentFixture<CarruselVeterinarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarruselVeterinarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarruselVeterinarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
