import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaInicioUsuComponent } from './vista-inicio-usu.component';

describe('VistaInicioUsuComponent', () => {
  let component: VistaInicioUsuComponent;
  let fixture: ComponentFixture<VistaInicioUsuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaInicioUsuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaInicioUsuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
