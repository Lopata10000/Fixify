/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Town } from '../../models/town';

export interface UpdateTown$Params {
  id: number;
      body: Town
}

export function updateTown(http: HttpClient, rootUrl: string, params: UpdateTown$Params, context?: HttpContext): Observable<StrictHttpResponse<Town>> {
  const rb = new RequestBuilder(rootUrl, updateTown.PATH, 'put');
  if (params) {
    rb.path('id', params.id, {});
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Town>;
    })
  );
}

updateTown.PATH = '/api/towns/{id}';
