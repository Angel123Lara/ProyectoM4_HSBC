import { TestBed } from '@angular/core/testing';

import { SpecialityServiceService } from './speciality-service.service';

describe('SpecialityServiceService', () => {
  let service: SpecialityServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpecialityServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
