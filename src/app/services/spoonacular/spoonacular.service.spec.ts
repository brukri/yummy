import { TestBed, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SpoonacularService } from './spoonacular.service';
import { HttpClientTestingModule} from '@angular/common/http/testing';

describe('SpoonacularService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [SpoonacularService]
    });
  });

  it('should be created', inject([SpoonacularService], (service: SpoonacularService) => {
    expect(service).toBeTruthy();
  }));
});
