import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitialTextComponent } from './initial-text.component';

describe('InitialTextComponent', () => {
  let component: InitialTextComponent;
  let fixture: ComponentFixture<InitialTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InitialTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InitialTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
