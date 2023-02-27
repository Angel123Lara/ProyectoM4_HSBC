import { TestBed } from '@angular/core/testing';
import { GeneralServiceService } from './General-service.service';

describe('WelcomePageServiceService', () => {
  let service: GeneralServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeneralServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
