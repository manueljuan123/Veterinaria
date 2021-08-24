import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaServiciosUsuComponent } from './vista-servicios-usu.component';

describe('VistaServiciosUsuComponent', () => {
  let component: VistaServiciosUsuComponent;
  let fixture: ComponentFixture<VistaServiciosUsuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaServiciosUsuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaServiciosUsuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
