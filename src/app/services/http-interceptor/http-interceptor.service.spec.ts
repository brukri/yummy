import { TestBed, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpInterceptorService } from './http-interceptor.service';

describe('HttpHeaderInterceptorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [HttpInterceptorService]
    });
  });

  it('should be created', inject(
    [HttpInterceptorService],
    (service: HttpInterceptorService) => {
      expect(service).toBeTruthy();
    }
  ));
});
