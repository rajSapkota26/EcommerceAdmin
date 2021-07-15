import { TestBed } from '@angular/core/testing';

import { PreorderService } from './preorder.service';

describe('PreorderService', () => {
  let service: PreorderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PreorderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
