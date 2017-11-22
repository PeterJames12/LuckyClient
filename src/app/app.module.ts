import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {Http, HttpModule, RequestOptions} from '@angular/http';
import {
  MdButtonModule,
  MdMenuModule,
  MdIconModule,
  MdToolbarModule,
  MdTooltipModule,
  MdCardModule,
  MdInputModule,
  MdIconRegistry,
  MdProgressSpinnerModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login';
import { LoginGuard, GuestGuard } from './guard';
import { NotFoundComponent } from './not-found';
import { AccountMenuComponent } from './component/header/account-menu/account-menu.component';
import {
  HeaderComponent,
  ApiCardComponent,
  FooterComponent,
} from './component';

import {
  ApiService,
  AuthService,
  UserService,
  ConfigService
} from './service';
import { ChangePasswordComponent } from './change-password/change-password.component';
import {ToastModule} from 'ng2-toastr';
import {CacheService} from 'ionic-cache/src/cache.service';
import {LuckyComponent} from './lucky/lucky.component';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import {HomeComponent} from './home/home.component';
import {JackpotService} from './service/jackpot.service';
import {AuthConfig, AuthHttp} from 'angular2-jwt';
import {Ng2GoogleChartsModule} from 'ng2-google-charts';
import {JackpotWinnerService} from './service/jackpot.winner.service';

export function initUserFactory(userService: UserService) {
    return () => userService.initUser();
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ApiCardComponent,
    HomeComponent,
    LoginComponent,
    NotFoundComponent,
    AccountMenuComponent,
    ChangePasswordComponent,
    LuckyComponent
  ],
  imports: [
    Ng2GoogleChartsModule,
    Ng2SmartTableModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    MdMenuModule,
    MdTooltipModule,
    MdButtonModule,
    MdIconModule,
    MdInputModule,
    MdToolbarModule,
    MdCardModule,
    MdProgressSpinnerModule,
    FlexLayoutModule,
    ToastModule.forRoot(),
  ],
  providers: [
    LoginGuard,
    GuestGuard,
    AuthService,
    AuthHttp,
    CacheService,
    ApiService,
    UserService,
    JackpotService,
    JackpotWinnerService,
    LoginComponent,
    ConfigService,
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [Http, RequestOptions]
    },
    MdIconRegistry,
    {
      'provide': APP_INITIALIZER,
      'useFactory': initUserFactory,
      'deps': [UserService],
      'multi': true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig(), http, options);
}
