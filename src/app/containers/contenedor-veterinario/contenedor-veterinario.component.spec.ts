import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenedorVeterinarioComponent } from './contenedor-veterinario.component';

describe('ContenedorVeterinarioComponent', () => {
  let component: ContenedorVeterinarioComponent;
  let fixture: ComponentFixture<ContenedorVeterinarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContenedorVeterinarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenedorVeterinarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
