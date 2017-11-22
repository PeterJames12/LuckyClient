import {Injectable} from '@angular/core';
import {ApiService} from './api.service';
import {ConfigService} from './config.service';
import {Observable} from 'rxjs/Observable';
import {JackpotWinner} from '../model/jackpot.winner';

@Injectable()
export class JackpotWinnerService {

  constructor(private apiService: ApiService,
              private config: ConfigService) {
  }

  getAll(): Observable<JackpotWinner[]> {
    return this.apiService.get(this.config.getAllWinners);
  }

  getTheLastOne(): Observable<JackpotWinner> {
    return this.apiService.get(this.config.getTheLastOneWinner);
  }

  getWinner(): Observable<JackpotWinner> {
    return this.apiService.get(this.config.winner);
  }
}
