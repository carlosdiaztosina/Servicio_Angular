import { Injectable } from '@angular/core';
import { Coche } from './coche';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  endpoint: string = 'http://localhost:27017/api';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) {}

  AddCoche(data: Coche): Observable<any> {
    let API_URL = `${this.endpoint}/add-coche`;
    return this.http.post(API_URL, data).pipe(catchError(this.errorMgmt));
  }

  GetCoches() {
    return this.http.get(`${this.endpoint}`);
  }

  GetCoche(id): Observable<any> {
    let API_URL = `${this.endpoint}/read-coche/${id}`;
    return this.http.get(API_URL, { headers: this.headers }).pipe(
      map((res: Response) => {
        return res || {};
      }),
      catchError(this.errorMgmt)
    );
  }

  UpdateCoche(id, data): Observable<any> {
    let API_URL = `${this.endpoint}/update-coche/${id}`;
    return this.http
      .put(API_URL, data, { headers: this.headers })
      .pipe(catchError(this.errorMgmt));
  }

  DeleteCoche(id): Observable<any> {
    var API_URL = `${this.endpoint}/delete-coche/${id}`;
    return this.http.delete(API_URL).pipe(catchError(this.errorMgmt));
  }

  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}
