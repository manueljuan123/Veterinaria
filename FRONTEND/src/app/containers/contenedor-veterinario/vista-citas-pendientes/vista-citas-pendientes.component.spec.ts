import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaCitasPendientesComponent } from './vista-citas-pendientes.component';

describe('VistaCitasPendientesComponent', () => {
  let component: VistaCitasPendientesComponent;
  let fixture: ComponentFixture<VistaCitasPendientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaCitasPendientesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaCitasPendientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
