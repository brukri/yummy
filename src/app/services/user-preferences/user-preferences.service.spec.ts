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
    service.initWithAuth(authManagement);
    expect(service.getFavorites().length).toEqual(0);
    service.addToFavorites('123');
    expect(service.getFavorites().length).toEqual(1);
    expect(service.getFavorites()[0]).toEqual('123');
    expect(service.isFavorite('123')).toEqual(true);
    service.removeFromFavorites('123');
    expect(service.getFavorites.length).toEqual(0);
  }));
  
  it('should store and remove diets', inject([UserPreferencesService], (service: UserPreferencesService) => {
    service.initWithAuth(authManagement);
    expect(service.getDiets().length).toEqual(0);
    service.saveDiets(['vegan']);
    expect(service.getDiets().length).toEqual(1);
    expect(service.getDiets()[0]).toEqual('vegan');
    service.saveDiets([]);
    expect(service.getDiets().length).toEqual(0);
  }));

  it('should store and remove intolerances', inject([UserPreferencesService], (service: UserPreferencesService) => {
    service.initWithAuth(authManagement);
    expect(service.getIntolerances().length).toEqual(0);
    service.saveIntolerances(['lacto']);
    expect(service.getIntolerances().length).toEqual(1);
    expect(service.getIntolerances()[0]).toEqual('lacto');
    service.saveIntolerances([]);
    expect(service.getIntolerances().length).toEqual(0);
  }));

});
