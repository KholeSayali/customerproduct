import { TestBed } from '@angular/core/testing';

import { CustproserviceService } from './custproservice.service';

describe('CustproserviceService', () => {
  let service: CustproserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustproserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
