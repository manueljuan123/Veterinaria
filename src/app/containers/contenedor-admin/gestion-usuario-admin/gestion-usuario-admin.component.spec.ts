import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionUsuarioAdminComponent } from './gestion-usuario-admin.component';

describe('GestionUsuarioAdminComponent', () => {
  let component: GestionUsuarioAdminComponent;
  let fixture: ComponentFixture<GestionUsuarioAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionUsuarioAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionUsuarioAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
