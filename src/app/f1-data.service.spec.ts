import { TestBed } from '@angular/core/testing';

import { F1DataService } from './f1-data.service';

describe('F1EventDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: F1DataService = TestBed.get(F1DataService);
    expect(service).toBeTruthy();
  });
});
