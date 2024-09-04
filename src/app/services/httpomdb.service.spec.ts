import { TestBed } from '@angular/core/testing';

import { HttpomdbService } from './httpomdb.service';

describe('HttpomdbService', () => {
  let service: HttpomdbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpomdbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
