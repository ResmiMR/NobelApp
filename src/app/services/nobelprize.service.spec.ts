import { TestBed } from '@angular/core/testing';

import { NobelprizeService } from './nobelprize.service';

describe('NobelprizeService', () => {
  let service: NobelprizeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NobelprizeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
