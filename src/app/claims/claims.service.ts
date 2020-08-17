import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Sku } from '../claims/sku';
import { Observable, throwError } from 'rxjs';
import { Claim } from '../claims/claim';
import { CatalogItem } from '../claims/catalog-item';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClaimsService {

  skuURL = 'http://localhost:4625/api/claims?partnerId=316905&clientId=21&localeId=1&monthName=july';
  claimURL = 'http://localhost:4625/api/claims';

  constructor(private httpClient: HttpClient) { }

  getAllSkus(): Observable<any> {
    return this.httpClient.get<any>(this.skuURL);
  }

  createClaim(claim): Observable<Claim> {
    return this.httpClient.post<Claim>(this.claimURL, claim).pipe(catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Client Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Serve Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}
