import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenedorInfoComponent } from './contenedor-info.component';

describe('ContenedorInfoComponent', () => {
  let component: ContenedorInfoComponent;
  let fixture: ComponentFixture<ContenedorInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContenedorInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenedorInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
