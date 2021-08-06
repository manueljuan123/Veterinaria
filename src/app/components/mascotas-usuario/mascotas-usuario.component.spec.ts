import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MascotasUsuarioComponent } from './mascotas-usuario.component';

describe('MascotasUsuarioComponent', () => {
  let component: MascotasUsuarioComponent;
  let fixture: ComponentFixture<MascotasUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MascotasUsuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MascotasUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
