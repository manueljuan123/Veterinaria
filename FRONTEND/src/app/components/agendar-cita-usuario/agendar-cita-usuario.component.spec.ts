import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendarCitaUsuarioComponent } from './agendar-cita-usuario.component';

describe('AgendarCitaUsuarioComponent', () => {
  let component: AgendarCitaUsuarioComponent;
  let fixture: ComponentFixture<AgendarCitaUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgendarCitaUsuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendarCitaUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
