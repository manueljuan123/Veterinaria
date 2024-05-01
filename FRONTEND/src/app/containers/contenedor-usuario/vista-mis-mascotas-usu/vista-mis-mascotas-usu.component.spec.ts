import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaMisMascotasUsuComponent } from './vista-mis-mascotas-usu.component';

describe('VistaMisMascotasUsuComponent', () => {
  let component: VistaMisMascotasUsuComponent;
  let fixture: ComponentFixture<VistaMisMascotasUsuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaMisMascotasUsuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaMisMascotasUsuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
