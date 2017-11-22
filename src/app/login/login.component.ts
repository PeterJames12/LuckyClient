import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DisplayMessage } from '../shared/models/display-message';
import {
  UserService,
  AuthService
} from '../service';

import 'rxjs/add/observable/interval';
import {Subject} from 'rxjs/Subject';
import {ToastContainer, ToastsManager} from 'ng2-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  title = 'Login';
  githubLink = 'https://github.com/bfwg/angular-spring-starter';
  form: FormGroup;

  /**
   * Boolean used in telling the UI
   * that the form has been submitted
   * and is awaiting a response
   */
  submitted = false;

  /**
   * Notification message from received
   * form request or router
   */
  notification: DisplayMessage;

  private ngUnsubscribe: Subject<void> = new Subject<void>();

  constructor(private userService: UserService,
              private authService: AuthService,
              private router: Router,
              private route: ActivatedRoute,
              private formBuilder: FormBuilder,
              private toast: ToastsManager) {
  }

  ngOnInit() {
    this.route.params
    .takeUntil(this.ngUnsubscribe)
    .subscribe((params: DisplayMessage) => {
      this.notification = params;
    });
    this.form = this.formBuilder.group({
      username: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(64)])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(32)])]
    });
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  repository() {
    window.location.href = this.githubLink;
  }

  onSubmit() {
    /**
     * Innocent until proven guilty
     */
    this.notification = undefined;
    this.submitted = true;

    this.authService.login(this.form.value)
    // show me the animation
      .delay(500)
      .subscribe(() => {
          this.toast.success('Logged In successfully", "Success!');
          this.userService.getMyInfo().subscribe();
          this.router.navigate(['/home']);
        },
        error => {
          this.submitted = false;
          this.notification = { msgType: 'error', msgBody: 'Incorrect username or password.' };
        });
  }
}
