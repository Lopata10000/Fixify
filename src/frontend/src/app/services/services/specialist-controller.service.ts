/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { createSpecialist } from '../fn/specialist-controller/create-specialist';
import { CreateSpecialist$Params } from '../fn/specialist-controller/create-specialist';
import { deleteSpecialist } from '../fn/specialist-controller/delete-specialist';
import { DeleteSpecialist$Params } from '../fn/specialist-controller/delete-specialist';
import { getAllSpecialists } from '../fn/specialist-controller/get-all-specialists';
import { GetAllSpecialists$Params } from '../fn/specialist-controller/get-all-specialists';
import { getSpecialistById } from '../fn/specialist-controller/get-specialist-by-id';
import { GetSpecialistById$Params } from '../fn/specialist-controller/get-specialist-by-id';
import { Specialist } from '../models/specialist';
import { updateSpecialist } from '../fn/specialist-controller/update-specialist';
import { UpdateSpecialist$Params } from '../fn/specialist-controller/update-specialist';

@Injectable({ providedIn: 'root' })
export class SpecialistControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getSpecialistById()` */
  static readonly GetSpecialistByIdPath = '/specialists/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getSpecialistById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSpecialistById$Response(params: GetSpecialistById$Params, context?: HttpContext): Observable<StrictHttpResponse<Specialist>> {
    return getSpecialistById(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getSpecialistById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSpecialistById(params: GetSpecialistById$Params, context?: HttpContext): Observable<Specialist> {
    return this.getSpecialistById$Response(params, context).pipe(
      map((r: StrictHttpResponse<Specialist>): Specialist => r.body)
    );
  }

  /** Path part for operation `updateSpecialist()` */
  static readonly UpdateSpecialistPath = '/specialists/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateSpecialist()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateSpecialist$Response(params: UpdateSpecialist$Params, context?: HttpContext): Observable<StrictHttpResponse<Specialist>> {
    return updateSpecialist(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateSpecialist$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateSpecialist(params: UpdateSpecialist$Params, context?: HttpContext): Observable<Specialist> {
    return this.updateSpecialist$Response(params, context).pipe(
      map((r: StrictHttpResponse<Specialist>): Specialist => r.body)
    );
  }

  /** Path part for operation `deleteSpecialist()` */
  static readonly DeleteSpecialistPath = '/specialists/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteSpecialist()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteSpecialist$Response(params: DeleteSpecialist$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deleteSpecialist(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteSpecialist$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteSpecialist(params: DeleteSpecialist$Params, context?: HttpContext): Observable<void> {
    return this.deleteSpecialist$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `getAllSpecialists()` */
  static readonly GetAllSpecialistsPath = '/specialists';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllSpecialists()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllSpecialists$Response(params?: GetAllSpecialists$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Specialist>>> {
    return getAllSpecialists(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAllSpecialists$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllSpecialists(params?: GetAllSpecialists$Params, context?: HttpContext): Observable<Array<Specialist>> {
    return this.getAllSpecialists$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Specialist>>): Array<Specialist> => r.body)
    );
  }

  /** Path part for operation `createSpecialist()` */
  static readonly CreateSpecialistPath = '/specialists';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createSpecialist()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createSpecialist$Response(params: CreateSpecialist$Params, context?: HttpContext): Observable<StrictHttpResponse<Specialist>> {
    return createSpecialist(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createSpecialist$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createSpecialist(params: CreateSpecialist$Params, context?: HttpContext): Observable<Specialist> {
    return this.createSpecialist$Response(params, context).pipe(
      map((r: StrictHttpResponse<Specialist>): Specialist => r.body)
    );
  }

}
