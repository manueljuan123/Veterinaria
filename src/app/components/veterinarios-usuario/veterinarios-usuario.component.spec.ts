import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeterinariosUsuarioComponent } from './veterinarios-usuario.component';

describe('VeterinariosUsuarioComponent', () => {
  let component: VeterinariosUsuarioComponent;
  let fixture: ComponentFixture<VeterinariosUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VeterinariosUsuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VeterinariosUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
