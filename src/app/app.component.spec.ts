import { TestBed, async } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { LoginComponent } from './login';
import { MockApiService } from './service/mocks/api.service.mock';

import { LoginGuard } from './guard';
import { NotFoundComponent } from './not-found';
import {
  ApiCardComponent,
  FooterComponent,
} from './component';

import {
  MdToolbarModule,
  MdIconRegistry
} from '@angular/material';


import {
  ApiService,
  AuthService,
  UserService,
  FooService,
  ConfigService
} from './service';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        FooterComponent,
      ],
      imports: [
        RouterTestingModule,
        MdToolbarModule
      ],
      providers: [
        MdIconRegistry,
        {
          provide: ApiService,
          useClass: MockApiService
        },
        AuthService,
        UserService,
        FooService,
        ConfigService
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

});
