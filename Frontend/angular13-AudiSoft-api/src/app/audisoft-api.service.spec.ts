import { TestBed } from '@angular/core/testing';

import { AudisoftApiService } from './audisoft-api.service';

describe('AudisoftApiService', () => {
  let service: AudisoftApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AudisoftApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
