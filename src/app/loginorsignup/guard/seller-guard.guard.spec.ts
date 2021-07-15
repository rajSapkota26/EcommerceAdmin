import { TestBed } from '@angular/core/testing';

import { SellerGuardGuard } from './seller-guard.guard';

describe('SellerGuardGuard', () => {
  let guard: SellerGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SellerGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
