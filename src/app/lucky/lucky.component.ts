import { Component, OnInit } from '@angular/core';
import {UserService} from '../service/user.service';
import {ToastsManager} from 'ng2-toastr';

@Component({
  selector: 'app-lucky',
  templateUrl: './lucky.component.html',
  styleUrls: ['./lucky.component.css']
})
export class LuckyComponent implements OnInit {

  constructor(private userService: UserService,
              private toast: ToastsManager) {
    userService.initUser();
    toast.info(userService.currentUser);
  }

  ngOnInit() {
  }

}
