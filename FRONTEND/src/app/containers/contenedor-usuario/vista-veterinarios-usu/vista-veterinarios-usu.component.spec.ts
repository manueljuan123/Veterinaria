import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaVeterinariosUsuComponent } from './vista-veterinarios-usu.component';

describe('VistaVeterinariosUsuComponent', () => {
  let component: VistaVeterinariosUsuComponent;
  let fixture: ComponentFixture<VistaVeterinariosUsuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaVeterinariosUsuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaVeterinariosUsuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
