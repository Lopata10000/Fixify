/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { createTown } from '../fn/town-controller/create-town';
import { CreateTown$Params } from '../fn/town-controller/create-town';
import { deleteTown } from '../fn/town-controller/delete-town';
import { DeleteTown$Params } from '../fn/town-controller/delete-town';
import { getAllTown } from '../fn/town-controller/get-all-town';
import { GetAllTown$Params } from '../fn/town-controller/get-all-town';
import { getTownById } from '../fn/town-controller/get-town-by-id';
import { GetTownById$Params } from '../fn/town-controller/get-town-by-id';
import { Town } from '../models/town';
import { updateTown } from '../fn/town-controller/update-town';
import { UpdateTown$Params } from '../fn/town-controller/update-town';

@Injectable({ providedIn: 'root' })
export class TownControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getTownById()` */
  static readonly GetTownByIdPath = '/api/towns/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getTownById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTownById$Response(params: GetTownById$Params, context?: HttpContext): Observable<StrictHttpResponse<Town>> {
    return getTownById(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getTownById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTownById(params: GetTownById$Params, context?: HttpContext): Observable<Town> {
    return this.getTownById$Response(params, context).pipe(
      map((r: StrictHttpResponse<Town>): Town => r.body)
    );
  }

  /** Path part for operation `updateTown()` */
  static readonly UpdateTownPath = '/api/towns/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateTown()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateTown$Response(params: UpdateTown$Params, context?: HttpContext): Observable<StrictHttpResponse<Town>> {
    return updateTown(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateTown$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateTown(params: UpdateTown$Params, context?: HttpContext): Observable<Town> {
    return this.updateTown$Response(params, context).pipe(
      map((r: StrictHttpResponse<Town>): Town => r.body)
    );
  }

  /** Path part for operation `deleteTown()` */
  static readonly DeleteTownPath = '/api/towns/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteTown()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteTown$Response(params: DeleteTown$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deleteTown(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteTown$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteTown(params: DeleteTown$Params, context?: HttpContext): Observable<void> {
    return this.deleteTown$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `createTown()` */
  static readonly CreateTownPath = '/api/towns';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createTown()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createTown$Response(params: CreateTown$Params, context?: HttpContext): Observable<StrictHttpResponse<Town>> {
    return createTown(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createTown$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createTown(params: CreateTown$Params, context?: HttpContext): Observable<Town> {
    return this.createTown$Response(params, context).pipe(
      map((r: StrictHttpResponse<Town>): Town => r.body)
    );
  }

  /** Path part for operation `getAllTown()` */
  static readonly GetAllTownPath = '/api/towns/all';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllTown()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllTown$Response(params?: GetAllTown$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Town>>> {
    return getAllTown(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAllTown$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllTown(params?: GetAllTown$Params, context?: HttpContext): Observable<Array<Town>> {
    return this.getAllTown$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Town>>): Array<Town> => r.body)
    );
  }

}
