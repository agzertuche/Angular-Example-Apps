import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class CoreService {
  private baseUrl = 'api';

  constructor(private http: HttpClient) {}

  get(route: string): Observable<any> {
    return this.http
      .get<any>(this.getUrl(route))
      .pipe(tap(x => console.log('getting data')));
  }

  post(route: string, body: object): Observable<any> {
    return this.http
      .post(this.getUrl(route), body, httpOptions)
      .pipe(tap(x => console.log('posting data')));
  }

  update(route: string, body: object): Observable<any> {
    return this.http
      .put(this.getUrl(route), body, httpOptions)
      .pipe(tap(x => console.log('updating data')));
  }

  delete(route: string, body: object): Observable<any> {
    return this.http
      .delete(this.getUrl(route), httpOptions)
      .pipe(tap(x => console.log('deleting data')));
  }

  private getUrl(route: string) {
    return `${this.baseUrl}/${route}`;
  }
}
