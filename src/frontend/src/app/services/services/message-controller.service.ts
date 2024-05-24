/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { createMessage } from '../fn/message-controller/create-message';
import { CreateMessage$Params } from '../fn/message-controller/create-message';
import { deleteMessage } from '../fn/message-controller/delete-message';
import { DeleteMessage$Params } from '../fn/message-controller/delete-message';
import { getAllMessages } from '../fn/message-controller/get-all-messages';
import { GetAllMessages$Params } from '../fn/message-controller/get-all-messages';
import { getMessageById } from '../fn/message-controller/get-message-by-id';
import { GetMessageById$Params } from '../fn/message-controller/get-message-by-id';
import { Message } from '../models/message';
import { updateMessage } from '../fn/message-controller/update-message';
import { UpdateMessage$Params } from '../fn/message-controller/update-message';

@Injectable({ providedIn: 'root' })
export class MessageControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getMessageById()` */
  static readonly GetMessageByIdPath = '/messages/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getMessageById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getMessageById$Response(params: GetMessageById$Params, context?: HttpContext): Observable<StrictHttpResponse<Message>> {
    return getMessageById(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getMessageById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getMessageById(params: GetMessageById$Params, context?: HttpContext): Observable<Message> {
    return this.getMessageById$Response(params, context).pipe(
      map((r: StrictHttpResponse<Message>): Message => r.body)
    );
  }

  /** Path part for operation `updateMessage()` */
  static readonly UpdateMessagePath = '/messages/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateMessage()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateMessage$Response(params: UpdateMessage$Params, context?: HttpContext): Observable<StrictHttpResponse<Message>> {
    return updateMessage(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateMessage$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateMessage(params: UpdateMessage$Params, context?: HttpContext): Observable<Message> {
    return this.updateMessage$Response(params, context).pipe(
      map((r: StrictHttpResponse<Message>): Message => r.body)
    );
  }

  /** Path part for operation `deleteMessage()` */
  static readonly DeleteMessagePath = '/messages/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteMessage()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteMessage$Response(params: DeleteMessage$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deleteMessage(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteMessage$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteMessage(params: DeleteMessage$Params, context?: HttpContext): Observable<void> {
    return this.deleteMessage$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `getAllMessages()` */
  static readonly GetAllMessagesPath = '/messages';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllMessages()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllMessages$Response(params?: GetAllMessages$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Message>>> {
    return getAllMessages(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAllMessages$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllMessages(params?: GetAllMessages$Params, context?: HttpContext): Observable<Array<Message>> {
    return this.getAllMessages$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Message>>): Array<Message> => r.body)
    );
  }

  /** Path part for operation `createMessage()` */
  static readonly CreateMessagePath = '/messages';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createMessage()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createMessage$Response(params: CreateMessage$Params, context?: HttpContext): Observable<StrictHttpResponse<Message>> {
    return createMessage(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createMessage$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createMessage(params: CreateMessage$Params, context?: HttpContext): Observable<Message> {
    return this.createMessage$Response(params, context).pipe(
      map((r: StrictHttpResponse<Message>): Message => r.body)
    );
  }

}
