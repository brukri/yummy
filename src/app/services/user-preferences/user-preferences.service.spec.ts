import { TestBed, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { UserPreferencesService } from './user-preferences.service';

describe('UserPreferencesService', () => {
  let authManagement;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [UserPreferencesService]
    });
    authManagement = jasmine.createSpyObj('Management', ['patchUserMetadata']);
    authManagement.patchUserMetadata.and.callFake(function(user, metaData, cb) {cb(null, {'user_metadata' : metaData} ); });
  });
  it('should be created', inject([UserPreferencesService], (service: UserPreferencesService) => {
    expect(service).toBeTruthy();
  }));

  it('should store and remove favorites', inject([UserPreferencesService], (service: UserPreferencesService) => {
    expect(service).toBeTruthy();

    service.initWithAuth(authManagement);
    expect(service.getFavorites().length).toEqual(0);
    service.addToFavorites('123');
    expect(service.getFavorites().length).toEqual(1);
    service.removeFromFavorites('123');
    expect(service.getFavorites.length).toEqual(0);
  }));

});
