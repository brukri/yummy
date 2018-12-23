import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule} from '@angular/common/http/testing';
import { YummyDataService } from './yummy-data.service';

describe('YummyDataServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [YummyDataService]
    });
  });

  it('should be created', inject([YummyDataService], (service: YummyDataService) => {
    expect(service).toBeTruthy();
  }));
});
