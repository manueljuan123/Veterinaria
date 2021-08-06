import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitasUsuarioComponent } from './citas-usuario.component';

describe('CitasUsuarioComponent', () => {
  let component: CitasUsuarioComponent;
  let fixture: ComponentFixture<CitasUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitasUsuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CitasUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
