/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { createSpecialistCategory } from '../fn/specialist-category-controller/create-specialist-category';
import { CreateSpecialistCategory$Params } from '../fn/specialist-category-controller/create-specialist-category';
import { deleteSpecialistCategory } from '../fn/specialist-category-controller/delete-specialist-category';
import { DeleteSpecialistCategory$Params } from '../fn/specialist-category-controller/delete-specialist-category';
import { getAllSpecialistCategories } from '../fn/specialist-category-controller/get-all-specialist-categories';
import { GetAllSpecialistCategories$Params } from '../fn/specialist-category-controller/get-all-specialist-categories';
import { getSpecialistCategoryById } from '../fn/specialist-category-controller/get-specialist-category-by-id';
import { GetSpecialistCategoryById$Params } from '../fn/specialist-category-controller/get-specialist-category-by-id';
import { SpecialistCategory } from '../models/specialist-category';
import { updateSpecialistCategory } from '../fn/specialist-category-controller/update-specialist-category';
import { UpdateSpecialistCategory$Params } from '../fn/specialist-category-controller/update-specialist-category';

@Injectable({ providedIn: 'root' })
export class SpecialistCategoryControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getSpecialistCategoryById()` */
  static readonly GetSpecialistCategoryByIdPath = '/specialist-categories/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getSpecialistCategoryById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSpecialistCategoryById$Response(params: GetSpecialistCategoryById$Params, context?: HttpContext): Observable<StrictHttpResponse<SpecialistCategory>> {
    return getSpecialistCategoryById(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getSpecialistCategoryById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSpecialistCategoryById(params: GetSpecialistCategoryById$Params, context?: HttpContext): Observable<SpecialistCategory> {
    return this.getSpecialistCategoryById$Response(params, context).pipe(
      map((r: StrictHttpResponse<SpecialistCategory>): SpecialistCategory => r.body)
    );
  }

  /** Path part for operation `updateSpecialistCategory()` */
  static readonly UpdateSpecialistCategoryPath = '/specialist-categories/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateSpecialistCategory()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateSpecialistCategory$Response(params: UpdateSpecialistCategory$Params, context?: HttpContext): Observable<StrictHttpResponse<SpecialistCategory>> {
    return updateSpecialistCategory(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateSpecialistCategory$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateSpecialistCategory(params: UpdateSpecialistCategory$Params, context?: HttpContext): Observable<SpecialistCategory> {
    return this.updateSpecialistCategory$Response(params, context).pipe(
      map((r: StrictHttpResponse<SpecialistCategory>): SpecialistCategory => r.body)
    );
  }

  /** Path part for operation `deleteSpecialistCategory()` */
  static readonly DeleteSpecialistCategoryPath = '/specialist-categories/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteSpecialistCategory()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteSpecialistCategory$Response(params: DeleteSpecialistCategory$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deleteSpecialistCategory(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteSpecialistCategory$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteSpecialistCategory(params: DeleteSpecialistCategory$Params, context?: HttpContext): Observable<void> {
    return this.deleteSpecialistCategory$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `getAllSpecialistCategories()` */
  static readonly GetAllSpecialistCategoriesPath = '/specialist-categories';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllSpecialistCategories()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllSpecialistCategories$Response(params?: GetAllSpecialistCategories$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<SpecialistCategory>>> {
    return getAllSpecialistCategories(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAllSpecialistCategories$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllSpecialistCategories(params?: GetAllSpecialistCategories$Params, context?: HttpContext): Observable<Array<SpecialistCategory>> {
    return this.getAllSpecialistCategories$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<SpecialistCategory>>): Array<SpecialistCategory> => r.body)
    );
  }

  /** Path part for operation `createSpecialistCategory()` */
  static readonly CreateSpecialistCategoryPath = '/specialist-categories';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createSpecialistCategory()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createSpecialistCategory$Response(params: CreateSpecialistCategory$Params, context?: HttpContext): Observable<StrictHttpResponse<SpecialistCategory>> {
    return createSpecialistCategory(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createSpecialistCategory$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createSpecialistCategory(params: CreateSpecialistCategory$Params, context?: HttpContext): Observable<SpecialistCategory> {
    return this.createSpecialistCategory$Response(params, context).pipe(
      map((r: StrictHttpResponse<SpecialistCategory>): SpecialistCategory => r.body)
    );
  }

}
