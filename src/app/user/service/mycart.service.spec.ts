import { TestBed } from '@angular/core/testing';

import { MycartService } from './mycart.service';

describe('MycartService', () => {
  let service: MycartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MycartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
