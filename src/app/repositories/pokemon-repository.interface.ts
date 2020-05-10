import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface IPokemonRepository {
  get(path: string, params: HttpParams): Observable<any>
  put(path: string, body: Object): Observable<any>
  post(path: string, body: Object): Observable<any>
  delete(path): Observable<any>
}
