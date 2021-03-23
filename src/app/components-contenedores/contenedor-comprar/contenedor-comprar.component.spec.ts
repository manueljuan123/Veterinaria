import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenedorComprarComponent } from './contenedor-comprar.component';

describe('ContenedorComprarComponent', () => {
  let component: ContenedorComprarComponent;
  let fixture: ComponentFixture<ContenedorComprarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContenedorComprarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenedorComprarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
