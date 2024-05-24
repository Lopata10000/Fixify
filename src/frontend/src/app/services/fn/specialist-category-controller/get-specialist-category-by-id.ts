/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { SpecialistCategory } from '../../models/specialist-category';

export interface GetSpecialistCategoryById$Params {
  id: number;
}

export function getSpecialistCategoryById(http: HttpClient, rootUrl: string, params: GetSpecialistCategoryById$Params, context?: HttpContext): Observable<StrictHttpResponse<SpecialistCategory>> {
  const rb = new RequestBuilder(rootUrl, getSpecialistCategoryById.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<SpecialistCategory>;
    })
  );
}

getSpecialistCategoryById.PATH = '/specialist-categories/{id}';
