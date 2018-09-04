import { TestBed, inject } from '@angular/core/testing';

import { SpoonacularService } from './spoonacular.service';

describe('SpoonacularService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SpoonacularService]
    });
  });

  it('should be created', inject([SpoonacularService], (service: SpoonacularService) => {
    expect(service).toBeTruthy();
  }));
});
