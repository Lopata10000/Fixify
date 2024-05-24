/* tslint:disable */
/* eslint-disable */
import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationParams } from './api-configuration';

import { UserControllerService } from './services/user-controller.service';
import { SpecialistControllerService } from './services/specialist-controller.service';
import { SpecialistCategoryControllerService } from './services/specialist-category-controller.service';
import { ReviewControllerService } from './services/review-controller.service';
import { ProjectControllerService } from './services/project-controller.service';
import { MessageControllerService } from './services/message-controller.service';
import { ManagementService } from './services/management.service';
import { TownControllerService } from './services/town-controller.service';
import { AuthenticationControllerService } from './services/authentication-controller.service';

/**
 * Module that provides all services and configuration.
 */
@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [
    UserControllerService,
    SpecialistControllerService,
    SpecialistCategoryControllerService,
    ReviewControllerService,
    ProjectControllerService,
    MessageControllerService,
    ManagementService,
    TownControllerService,
    AuthenticationControllerService,
    ApiConfiguration
  ],
})
export class ApiModule {
  static forRoot(params: ApiConfigurationParams): ModuleWithProviders<ApiModule> {
    return {
      ngModule: ApiModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: params
        }
      ]
    }
  }

  constructor( 
    @Optional() @SkipSelf() parentModule: ApiModule,
    @Optional() http: HttpClient
  ) {
    if (parentModule) {
      throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
    }
    if (!http) {
      throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
      'See also https://github.com/angular/angular/issues/20575');
    }
  }
}
