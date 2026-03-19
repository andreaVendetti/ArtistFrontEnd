import { TestBed } from '@angular/core/testing';

import { OperaService } from './opera-service';

describe('OperaService', () => {
  let service: OperaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OperaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
