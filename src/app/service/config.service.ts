import { Injectable } from '@angular/core';

@Injectable()
export class ConfigService {

  // private _api_url = 'http://54.37.9.114/lucky/api';
  private _api_url = '/api';

  private _refresh_token_url = this._api_url + '/refresh';

  private _login_url = this._api_url + '/login';

  private _logout_url = this._api_url + '/logout';

  private _change_password_url = this._api_url + '/changePassword';

  private whoAmI = this._api_url + '/whoami';

  private winnerUrl = this._api_url + '/jackpot/winner/get';

  private jackpotAll = this._api_url + '/jackpot/all';

  private jackpotStatistic = this._api_url + '/jackpot/quality';

  private jackpotWinnerAll = this._api_url + '/jackpot/winner/all';

  private jackpotWinnerLast = this._api_url + '/jackpot/winner/last';

  private reload = this._api_url + '/jackpot/reload';

  private currentJackpot = this._api_url + '/jackpot/currentJackpot';

  get refresh_token_url(): string {
      return this._refresh_token_url;
  }

  get getWhoAmI(): string {
      return this.whoAmI;
  }

  get login_url(): string {
      return this._login_url;
  }

  get logout_url(): string {
      return this._logout_url;
  }

  get change_password_url(): string {
      return this._change_password_url;
  }

  get winner(): string {
      return this.winnerUrl;
  }

  get getJackpotAll(): string {
      return this.jackpotAll;
  }

  get getJackpotStatistic(): string {
      return this.jackpotStatistic;
  }

  get getAllWinners(): string {
      return this.jackpotWinnerAll;
  }

  get getTheLastOneWinner(): string {
      return this.jackpotWinnerLast;
  }

  get reloadJackpot(): string {
      return this.reload;
  }

  get getCurrentJackpot(): string {
      return this.currentJackpot;
  }
}
