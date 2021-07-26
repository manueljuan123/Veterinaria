import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenedorUsuarioComponent } from './contenedor-usuario.component';

describe('ContenedorUsuarioComponent', () => {
  let component: ContenedorUsuarioComponent;
  let fixture: ComponentFixture<ContenedorUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContenedorUsuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenedorUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
