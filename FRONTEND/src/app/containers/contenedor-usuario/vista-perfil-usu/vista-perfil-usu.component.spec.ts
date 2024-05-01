import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaPerfilUsuComponent } from './vista-perfil-usu.component';

describe('VistaPerfilUsuComponent', () => {
  let component: VistaPerfilUsuComponent;
  let fixture: ComponentFixture<VistaPerfilUsuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaPerfilUsuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaPerfilUsuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
