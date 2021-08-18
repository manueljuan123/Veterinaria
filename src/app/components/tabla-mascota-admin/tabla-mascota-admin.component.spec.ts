import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaMascotaAdminComponent } from './tabla-mascota-admin.component';

describe('TablaMascotaAdminComponent', () => {
  let component: TablaMascotaAdminComponent;
  let fixture: ComponentFixture<TablaMascotaAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaMascotaAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaMascotaAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
