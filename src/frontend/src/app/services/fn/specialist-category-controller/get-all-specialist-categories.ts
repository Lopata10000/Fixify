/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { SpecialistCategory } from '../../models/specialist-category';

export interface GetAllSpecialistCategories$Params {
}

export function getAllSpecialistCategories(http: HttpClient, rootUrl: string, params?: GetAllSpecialistCategories$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<SpecialistCategory>>> {
  const rb = new RequestBuilder(rootUrl, getAllSpecialistCategories.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<SpecialistCategory>>;
    })
  );
}

getAllSpecialistCategories.PATH = '/specialist-categories';
