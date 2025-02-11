import { TestBed } from '@angular/core/testing';

import { CepproviderService } from './cepprovider.service';

describe('CepproviderService', () => {
  let service: CepproviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CepproviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
