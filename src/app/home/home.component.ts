import { Component, OnInit } from '@angular/core';
import {JackpotService} from '../service/jackpot.service';
import {Jackpot} from '../model/jackpot';
import {JackpotType} from '../model/jackpot.type';
import {ToastsManager} from 'ng2-toastr';
import {JackpotWinner} from '../model/jackpot.winner';
import {JackpotWinnerService} from '../service/jackpot.winner.service';
import {CurrentJackpot} from '../model/current.jackpot';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  jackpots: Jackpot[];
  winners: JackpotWinner[];
  jackpotType: JackpotType;
  theLastWinner: JackpotWinner;
  currentJackpot: CurrentJackpot;

  settings = {
    columns: {
      address: {
        title: 'address',
      },
      count: {
        title: 'count'
      }
    },
    actions: false,
  };

  winnerSettings = {
    columns: {
      address: {
        title: 'address'
      },
      date: {
        title: 'date'
      }
    },
    actions: false,
  };

  jackpotTable = [];
  winnerTable = [];
  pieChartJackpot = {};

  constructor(private jackpotService: JackpotService,
              private toast: ToastsManager,
              private winnerService: JackpotWinnerService) {

  }

  ngOnInit() {
    this.jackpotService.getAll().subscribe((res: Jackpot[]) => {
      this.jackpots = res;
      this.getAllFromJackpot();
    });

    this.jackpotService.getJackpotStatistic().subscribe((res: JackpotType) => {
      this.jackpotType = res;
      this.getJackpotStatistic();
    });

    this.winnerService.getAll().subscribe((res: JackpotWinner[]) => {
      this.winners = res;
      this.getAllWinners();
    });

    this.winnerService.getTheLastOne().subscribe((s: JackpotWinner) => {
      this.theLastWinner = s;
    });

    this.jackpotService.getCurrentJackpot().subscribe((current: CurrentJackpot) => {
      this.currentJackpot = current;
    });
  }

  getAllFromJackpot() {
    this.jackpots.forEach(s => {
      this.jackpotTable.push({
        address: s.address,
        count: s.count,
      });
    });
  }

  getAllWinners() {
    this.winners.forEach(s => {
      this.winnerTable.push({
        address: s.address,
        date: s.date
      });
    })
  }

  getJackpotStatistic() {
    this.pieChartJackpot = {
      chartType: 'PieChart',
      dataTable: [
        ['Jackpot', 'Statistic'],
        ['1', this.jackpotType.one],
        ['10', this.jackpotType.ten],
        ['100', this.jackpotType.oneHundred],
      ],
      options: {
        title: 'Jackpot Statistic',
        legend: { position: 'bottom'
        },
        is3D: true,
        height: 550
      },
    };
  }

  findWinner() {
    if (!this.jackpots.length) {
      this.toast.error('Nothing to get, click reload before');
      return;
    }
    this.winnerService.getWinner().subscribe((s: JackpotWinner) => {
      this.theLastWinner = s;
    });
    window.location.reload();
  }

  reload() {
    this.jackpotService.reload().subscribe();
    window.location.reload();
  }
}
