/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Message } from '../../models/message';

export interface UpdateMessage$Params {
  id: number;
      body: Message
}

export function updateMessage(http: HttpClient, rootUrl: string, params: UpdateMessage$Params, context?: HttpContext): Observable<StrictHttpResponse<Message>> {
  const rb = new RequestBuilder(rootUrl, updateMessage.PATH, 'put');
  if (params) {
    rb.path('id', params.id, {});
    rb.body(params.body, 'application/json');
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

updateMessage.PATH = '/messages/{id}';
