import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableGestionAdminComponent } from './table-gestion-admin.component';

describe('TableGestionAdminComponent', () => {
  let component: TableGestionAdminComponent;
  let fixture: ComponentFixture<TableGestionAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableGestionAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableGestionAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
