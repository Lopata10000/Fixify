/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Specialist } from '../../models/specialist';

export interface CreateSpecialist$Params {
      body: Specialist
}

export function createSpecialist(http: HttpClient, rootUrl: string, params: CreateSpecialist$Params, context?: HttpContext): Observable<StrictHttpResponse<Specialist>> {
  const rb = new RequestBuilder(rootUrl, createSpecialist.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Specialist>;
    })
  );
}

createSpecialist.PATH = '/specialists';
