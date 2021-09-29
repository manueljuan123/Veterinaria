import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilVeterinarioUsuarioComponent } from './perfil-veterinario-usuario.component';

describe('PerfilVeterinarioUsuarioComponent', () => {
  let component: PerfilVeterinarioUsuarioComponent;
  let fixture: ComponentFixture<PerfilVeterinarioUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilVeterinarioUsuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilVeterinarioUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
