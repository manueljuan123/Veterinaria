import { TestBed } from '@angular/core/testing';

import { VeterinarioGuard } from './veterinario.guard';

describe('VeterinarioGuard', () => {
  let guard: VeterinarioGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(VeterinarioGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
