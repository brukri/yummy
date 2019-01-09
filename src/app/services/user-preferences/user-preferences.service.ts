import { Injectable } from '@angular/core';
import * as auth0 from 'auth0-js';
import { environment } from '../../../environments/environment';
import {NUMBER_OF_RESULTS} from '../../yummyConstants';

@Injectable({
  providedIn: 'root'
})
export class UserPreferencesService {
  private auth0Management;
  private userMetadata;
  private userId;

  constructor() {
    const yummyUserMetadata = localStorage.getItem('yummyUserMetadata');
    this.userMetadata = yummyUserMetadata ? JSON.parse(yummyUserMetadata) : {};
  }

  init(accessToken: string, userId: string): void {
    this.userId = userId;
    this.intiAuth0Mangement(accessToken);
    this.loadUserMetadata();
  }

  initWithAuth(authManager: auth0.Management) {
    this.auth0Management = authManager;
  }


  invalidate() {
    this.userId = null;
    this.auth0Management = null;
    this.userMetadata = {};
    localStorage.removeItem('yummyUserMetadata');
  }

  intiAuth0Mangement(accessToken) {
    this.auth0Management = new auth0.Management({
      domain: environment.auth.domain,
      token: accessToken
    });
  }

  loadUserMetadata() {
    this.auth0Management.getUser(this.userId, (err, userResult) => {
      this.updateUserMetaData(userResult.user_metadata);
    });
  }

  getIntolerances(): string[] {
    return this.userMetadata.intolerances || [];
  }

  getDiets(): string[] {
    return this.userMetadata.diets || [];
  }

  getFavorites(): string[] {
    if (this.userMetadata.favorites) {
      return this.userMetadata.favorites;
    }
    this.userMetadata.favorites = [];
    return this.userMetadata.favorites;
  }

  getNumberOfResults(): number {
    return this.userMetadata.numberOfResults || NUMBER_OF_RESULTS;
  }

  addToFavorites(id: string): void {
    this.getFavorites().push(id);
    this.saveFavorites(this.userMetadata.favorites);
  }

  isFavorite(id: string) {
    return this.getFavorites().includes(id);
  }

  removeFromFavorites(id: string): void {
    this.userMetadata.favorites = this.getFavorites().filter(item => item !== id);
    this.saveFavorites(this.userMetadata.favorites);
  }

  saveFavorites(favorites: string[]): void {
    this.updateMetadataPartial({
      favorites
    });
  }

  saveDiets(diets: string[]): void {
    this.updateMetadataPartial({
      diets
    });
  }

  saveIntolerances(intolerances: string[]): void {
    this.updateMetadataPartial({
      intolerances
    });
  }

  saveNumberOfResults(numberOfResults: number): void {
    this.updateMetadataPartial({
      numberOfResults
    });
  }

  private updateMetadataPartial(userMetadataPartial) {
    this.auth0Management.patchUserMetadata(this.userId, userMetadataPartial, (err, userResult) => {
      this.updateUserMetaData(userResult.user_metadata);
    });
  }

  private updateUserMetaData(userMetadata) {
    this.userMetadata = userMetadata || {};
    localStorage.setItem('yummyUserMetadata', JSON.stringify(this.userMetadata));
  }
}
