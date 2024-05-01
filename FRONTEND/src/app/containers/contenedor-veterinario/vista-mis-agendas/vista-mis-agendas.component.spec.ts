import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaMisAgendasComponent } from './vista-mis-agendas.component';

describe('VistaMisAgendasComponent', () => {
  let component: VistaMisAgendasComponent;
  let fixture: ComponentFixture<VistaMisAgendasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaMisAgendasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaMisAgendasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
