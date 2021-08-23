import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrouselVistaUsuarioComponent } from './carrousel-vista-usuario.component';

describe('CarrouselVistaUsuarioComponent', () => {
  let component: CarrouselVistaUsuarioComponent;
  let fixture: ComponentFixture<CarrouselVistaUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarrouselVistaUsuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarrouselVistaUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
