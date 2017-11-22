import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Jackpot} from '../model/jackpot';
import {ApiService} from './api.service';
import {ConfigService} from './config.service';
import {JackpotType} from '../model/jackpot.type';
import {CurrentJackpot} from '../model/current.jackpot';

@Injectable()
export class JackpotService {

  constructor(private apiService: ApiService,
              private config: ConfigService) {
  }

  getAll(): Observable<Jackpot[]> {
    return this.apiService.get(this.config.getJackpotAll);
  }

  getJackpotStatistic(): Observable<JackpotType> {
    return this.apiService.get(this.config.getJackpotStatistic);
  }

  reload() {
    return this.apiService.get(this.config.reloadJackpot);
  }

  getCurrentJackpot(): Observable<CurrentJackpot> {
    return this.apiService.get(this.config.getCurrentJackpot)
  }
}
