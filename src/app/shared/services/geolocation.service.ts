import { HttpClient, HttpParams } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class GeolocationService {
  constructor(private http: HttpClient) {}

  getCordsCity(city: string): Observable<{ lat: string; lon: string }> {
    const params = new HttpParams().set('city', city).set('format', 'json');

    return this.http.get(environment.geolocationUrl, { params }).pipe(
      map((result: any) => {
        return {
          lat: result[0].lat,
          lon: result[0].lon,
        };
      })
    );
  }
}
