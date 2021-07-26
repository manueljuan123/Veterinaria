import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenedorRegistroComponent } from './contenedor-registro.component';

describe('ContenedorRegistroComponent', () => {
  let component: ContenedorRegistroComponent;
  let fixture: ComponentFixture<ContenedorRegistroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContenedorRegistroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenedorRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
