import { TestBed, inject } from '@angular/core/testing';

import { YummyDataService } from './yummy-data.service';

describe('YummyDataServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [YummyDataService]
    });
  });

  it('should be created', inject([YummyDataService], (service: YummyDataService) => {
    expect(service).toBeTruthy();
  }));
});
