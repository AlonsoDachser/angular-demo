/**
 * Library Service API
 * Library Service API Description
 *
 * OpenAPI spec version: 1.0
 * Contact: alonso.magarzo-external@es.dachser.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs';

import { Rental } from '../model/rental';
import { RentalDTO } from '../model/rentalDTO';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class RentalControllerService {

    protected basePath = 'https://localhost:8080';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * checks id there are copys available of the requested book creates rental data
     * creates rental data
     * @param request request
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public createRentalUsingPOST(request: RentalDTO, observe?: 'body', reportProgress?: boolean): Observable<Rental>;
    public createRentalUsingPOST(request: RentalDTO, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Rental>>;
    public createRentalUsingPOST(request: RentalDTO, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Rental>>;
    public createRentalUsingPOST(request: RentalDTO, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling createRentalUsingPOST.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.post<Rental>(`${this.basePath}/rentals`,
            request,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * deletes rental data and add a copy of the rental book to the library
     * deletes specific rental data
     * @param rentalsId rentalsId
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deleteRentalUsingDELETE(rentalsId: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public deleteRentalUsingDELETE(rentalsId: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public deleteRentalUsingDELETE(rentalsId: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public deleteRentalUsingDELETE(rentalsId: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (rentalsId === null || rentalsId === undefined) {
            throw new Error('Required parameter rentalsId was null or undefined when calling deleteRentalUsingDELETE.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.delete<any>(`${this.basePath}/rentals/${encodeURIComponent(String(rentalsId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * retrieves a list of al rentals
     * retrieves a list of al rentals
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public findAllUsingGET2(observe?: 'body', reportProgress?: boolean): Observable<Array<Rental>>;
    public findAllUsingGET2(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<Rental>>>;
    public findAllUsingGET2(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<Rental>>>;
    public findAllUsingGET2(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<Array<Rental>>(`${this.basePath}/rentals`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * updates rental data
     * updates specific rental data
     * @param rentalsId rentalsId
     * @param request request
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updateRentalUsingPUT(rentalsId: number, request: RentalDTO, observe?: 'body', reportProgress?: boolean): Observable<Rental>;
    public updateRentalUsingPUT(rentalsId: number, request: RentalDTO, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Rental>>;
    public updateRentalUsingPUT(rentalsId: number, request: RentalDTO, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Rental>>;
    public updateRentalUsingPUT(rentalsId: number, request: RentalDTO, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (rentalsId === null || rentalsId === undefined) {
            throw new Error('Required parameter rentalsId was null or undefined when calling updateRentalUsingPUT.');
        }

        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling updateRentalUsingPUT.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.put<Rental>(`${this.basePath}/rentals/${encodeURIComponent(String(rentalsId))}`,
            request,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
