import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeterinarioTablaComponent } from './veterinario-tabla.component';

describe('VeterinarioTablaComponent', () => {
  let component: VeterinarioTablaComponent;
  let fixture: ComponentFixture<VeterinarioTablaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VeterinarioTablaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VeterinarioTablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
