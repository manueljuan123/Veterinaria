import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarVetComponent } from './sidebar-vet.component';

describe('SidebarVetComponent', () => {
  let component: SidebarVetComponent;
  let fixture: ComponentFixture<SidebarVetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarVetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarVetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
