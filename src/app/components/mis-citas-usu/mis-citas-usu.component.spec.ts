import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisCitasUsuComponent } from './mis-citas-usu.component';

describe('MisCitasUsuComponent', () => {
  let component: MisCitasUsuComponent;
  let fixture: ComponentFixture<MisCitasUsuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MisCitasUsuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MisCitasUsuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
