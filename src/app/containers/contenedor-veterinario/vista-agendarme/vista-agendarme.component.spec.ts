import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaAgendarmeComponent } from './vista-agendarme.component';

describe('VistaAgendarmeComponent', () => {
  let component: VistaAgendarmeComponent;
  let fixture: ComponentFixture<VistaAgendarmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaAgendarmeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaAgendarmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
