import { TestBed, inject } from '@angular/core/testing';

import { YummyDataServiceService } from './yummy-data-service.service';

describe('YummyDataServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [YummyDataServiceService]
    });
  });

  it('should be created', inject([YummyDataServiceService], (service: YummyDataServiceService) => {
    expect(service).toBeTruthy();
  }));
});
