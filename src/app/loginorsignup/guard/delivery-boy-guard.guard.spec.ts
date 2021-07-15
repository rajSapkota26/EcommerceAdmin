import { TestBed } from '@angular/core/testing';

import { DeliveryBoyGuardGuard } from './delivery-boy-guard.guard';

describe('DeliveryBoyGuardGuard', () => {
  let guard: DeliveryBoyGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(DeliveryBoyGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
