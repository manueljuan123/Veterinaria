import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionVeterinariosAdminComponent } from './gestion-veterinarios-admin.component';

describe('GestionVeterinariosAdminComponent', () => {
  let component: GestionVeterinariosAdminComponent;
  let fixture: ComponentFixture<GestionVeterinariosAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionVeterinariosAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionVeterinariosAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
