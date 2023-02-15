import { TestBed } from '@angular/core/testing';

import { WelcomePageServiceService } from './welcome-page-service.service';

describe('WelcomePageServiceService', () => {
  let service: WelcomePageServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WelcomePageServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
