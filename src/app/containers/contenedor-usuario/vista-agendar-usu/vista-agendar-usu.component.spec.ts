import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaAgendarUsuComponent } from './vista-agendar-usu.component';

describe('VistaAgendarUsuComponent', () => {
  let component: VistaAgendarUsuComponent;
  let fixture: ComponentFixture<VistaAgendarUsuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaAgendarUsuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaAgendarUsuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
