import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialModule } from '../../material.module';
import { RecipeCardComponent } from './recipe-card.component';
import { UserPreferencesService } from '../../services/user-preferences/user-preferences.service';
import { AuthService } from 'src/app/services/auth/auth.service';

describe('RecipeCardComponent', () => {
  let component: RecipeCardComponent;
  let spy: jasmine.Spy;
  let fixture: ComponentFixture<RecipeCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, MaterialModule],
      providers: [AuthService, UserPreferencesService],
      declarations: [RecipeCardComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeCardComponent);
    component = fixture.componentInstance;
    component.recipe = { id: '123', image: '', imageType: '', title: '' };
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should show favorite button if logged in', () => {
    const authService = fixture.debugElement.injector.get(AuthService);
    spy = spyOnProperty(authService, 'isLoggedIn', 'get').and.returnValue(true);
    expect(component.shouldDisplayFavoriteButton()).toBe(true);
  });

  it('should not show favorite button if not logged in', () => {
    const authService = fixture.debugElement.injector.get(AuthService);
    spy = spyOnProperty(authService, 'isLoggedIn', 'get').and.returnValue(false);
    expect(component.shouldDisplayFavoriteButton()).toBe(false);
  });

  it('should change favorite', () => {
    const prefService = fixture.debugElement.injector.get(UserPreferencesService);
    spy = spyOn(prefService, 'addToFavorites');
    expect(component.IsFavorite).toBe(false);
    component.onFavoriteChange();
    expect(component.IsFavorite).toBe(true);
  });

});
