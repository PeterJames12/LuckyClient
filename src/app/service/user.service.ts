import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { ConfigService } from './config.service';
import {CacheService} from 'ionic-cache';

@Injectable()
export class UserService {

  currentUser;

  constructor(private apiService: ApiService,
              private config: ConfigService,
              private cache: CacheService) {
    this.cache = cache;
  }

  initUser() {
    return this.apiService.anonGet(this.config.refresh_token_url).toPromise()
      .then(res => {
        if (res.access_token !== null) {
          return this.getMyInfo().toPromise()
            .then(user => {
              this.currentUser = user;
            });
        }
      })
      .catch(() => null);
  }

  getMyInfo() {
    return this.apiService.get(this.config.getWhoAmI).map(user => this.currentUser = user);
  }
}
