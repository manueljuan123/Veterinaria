import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisMascotasUsuComponent } from './mis-mascotas-usu.component';

describe('MisMascotasUsuComponent', () => {
  let component: MisMascotasUsuComponent;
  let fixture: ComponentFixture<MisMascotasUsuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MisMascotasUsuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MisMascotasUsuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
