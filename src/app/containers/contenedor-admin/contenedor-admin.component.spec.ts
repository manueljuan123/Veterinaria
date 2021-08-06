import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenedorAdminComponent } from './contenedor-admin.component';

describe('ContenedorAdminComponent', () => {
  let component: ContenedorAdminComponent;
  let fixture: ComponentFixture<ContenedorAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContenedorAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenedorAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
