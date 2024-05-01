import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarVeterinarioComponent } from './navbar-veterinario.component';

describe('NavbarVeterinarioComponent', () => {
  let component: NavbarVeterinarioComponent;
  let fixture: ComponentFixture<NavbarVeterinarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarVeterinarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarVeterinarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
