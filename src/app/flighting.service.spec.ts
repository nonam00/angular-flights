import { TestBed } from '@angular/core/testing';

import { FlightingService } from './flighting.service';

describe('FlightingService', () => {
  let service: FlightingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlightingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
