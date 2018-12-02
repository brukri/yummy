import { TestBed, inject } from '@angular/core/testing';

import { HttpHeaderInterceptorService } from './http-header-interceptor.service';

describe('HttpHeaderInterceptorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpHeaderInterceptorService]
    });
  });

  it('should be created', inject([HttpHeaderInterceptorService], (service: HttpHeaderInterceptorService) => {
    expect(service).toBeTruthy();
  }));
});
