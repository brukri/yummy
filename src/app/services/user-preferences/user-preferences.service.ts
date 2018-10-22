import { Injectable } from '@angular/core';
import * as auth0 from 'auth0-js';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserPreferencesService {
  private auth0Management;
  private userMetadata;
  private userId;

  constructor() {
    this.userMetadata = {};
  }

  init(accessToken: string, userId: string): void {
    this.userId = userId;
    this.intiAuth0Mangement(accessToken);
    this.loadUserMetadata();
  }

  invalidate() {
    this.userId = null;
    this.auth0Management = null;
    this.userMetadata = {};
  }

  intiAuth0Mangement(accessToken) {
    this.auth0Management = new auth0.Management({
      domain: environment.auth.domain,
      token: accessToken
    });
  }

  loadUserMetadata() {
    this.auth0Management.getUser(this.userId, (err, userResult) => {
      this.userMetadata = userResult.user_metadata;
    });
  }

  updateMetadataPartial(userMetadataPartial) {
    this.auth0Management.patchUserMetadata(this.userId, userMetadataPartial, (err, userResult) => {
      this.userMetadata = userResult.user_metadata;
    });
  }

  getIntolerances(): string[] {
    return this.userMetadata.intolerances || [];
  }

  getDiets(): string[] {
    return this.userMetadata.diets || [];
  }

  getFavorites(): string[] {
    return this.userMetadata.favorites || [];
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
}
