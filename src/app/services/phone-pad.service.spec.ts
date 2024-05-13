import { TestBed } from '@angular/core/testing';

import { PhonePadService } from './phone-pad.service';

describe('PhonePadService', () => {
  let service: PhonePadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhonePadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
