/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Message } from '../../models/message';

export interface GetMessageById$Params {
  id: number;
}

export function getMessageById(http: HttpClient, rootUrl: string, params: GetMessageById$Params, context?: HttpContext): Observable<StrictHttpResponse<Message>> {
  const rb = new RequestBuilder(rootUrl, getMessageById.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Message>;
    })
  );
}

getMessageById.PATH = '/messages/{id}';
