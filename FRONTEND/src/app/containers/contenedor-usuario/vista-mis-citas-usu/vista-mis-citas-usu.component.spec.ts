import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaMisCitasUsuComponent } from './vista-mis-citas-usu.component';

describe('VistaMisCitasUsuComponent', () => {
  let component: VistaMisCitasUsuComponent;
  let fixture: ComponentFixture<VistaMisCitasUsuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaMisCitasUsuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaMisCitasUsuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
