// auth.service.ts
import { Injectable } from '@angular/core';
import * as auth0 from 'auth0-js';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';

(window as any).global = window;

@Injectable()
export class AuthService {
  // Create Auth0 web auth instance
  auth0: any;
  auth0Management: any;
  // Store authentication data
  expiresAt: number;
  userProfile: any;
  accessToken: string;
  authenticated: boolean;
  userId: string;

  constructor(private router: Router) {
    this.initAuth0();
    this.getAccessToken();
  }

  initAuth0() {
    // Create Auth0 web auth instance
    this.auth0 = new auth0.WebAuth({
      clientID: environment.auth.clientID,
      domain: environment.auth.domain,
      responseType: 'token',
      redirectUri: environment.auth.redirect,
      audience: environment.auth.audience,
      scope: environment.auth.scope
    });
  }

  intiAuth0Mangement(accessToken) {
    this.auth0Management = new auth0.Management({
      domain: environment.auth.domain,
      token: accessToken
    });
  }

  login() {
    // Auth0 authorize request
    this.auth0.authorize();
  }

  handleLoginCallback() {
    // When Auth0 hash parsed, get profile
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken) {
        window.location.hash = '';
        this.getUserInfo(authResult);
      } else if (err) {
        console.error(`Error: ${err.error}`);
      }
      this.router.navigate(['']);
    });
  }

  getAccessToken() {
    this.auth0.checkSession({}, (err, authResult) => {
      if (authResult && authResult.accessToken) {
        this.accessToken = authResult.accessToken;
        this.intiAuth0Mangement(authResult.accessToken);
        this.getUserInfo(authResult);
      }
    });
  }

  getUserInfo(authResult) {
    // Use access token to retrieve user's profile and set session
    this.auth0.client.userInfo(authResult.accessToken, (err, profile) => {
      if (profile) {
        console.log(profile);
        this._setSession(authResult, profile);
      }
    });
  }

  private _setSession(authResult, profile) {
    // Save authentication data and update login status subject
    this.expiresAt = authResult.expiresIn * 1000 + Date.now();
    this.userProfile = profile;
    this.authenticated = true;
    this.userId = profile.sub;
    this.loadUserMetadata(this.userId);

  }

  logout() {
    // Log out of Auth0 session
    // Ensure that returnTo URL is specified in Auth0
    // Application settings for Allowed Logout URLs
    this.auth0.logout({
      returnTo: environment.auth.redirect,
      clientID: environment.auth.clientID
    });
    this.accessToken = null;
  }

  get isLoggedIn(): boolean {
    // Check if current date is before token
    // expiration and user is signed in locally
    return Date.now() < this.expiresAt && this.authenticated;
  }

  loadUserMetadata(userId) {
    this.auth0Management.patchUserMetadata(userId, {abc: 'abc'}, (err, userResult) => {
      console.log(userResult);
    });
    this.auth0Management.getUser(userId, (err, userResult) => {
      console.log(userResult);
    });
  }
}
