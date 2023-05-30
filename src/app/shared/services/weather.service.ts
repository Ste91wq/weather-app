import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { IWeather } from '../model/weather.model';
import { GeolocationService } from './geolocation.service';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(
    private http: HttpClient,
    private geolocationService: GeolocationService
  ) {}

  getWeatherWeek(city: string): Observable<IWeather[]> {
    return this.geolocationService.getCordsCity(city).pipe(
      mergeMap(({ lat, lon }) => {
        const params = new HttpParams()
          .set('lat', lat)
          .set('lon', lon)
          .set('exclude', 'minutely,hourly,current,alerts')
          .set('lang', 'it')
          .set('units', 'metric')
          .set('appid', environment.apiKey);

        return this.http.get(environment.weatherWeekUrl, { params }).pipe(
          map(
            (data: any) =>
              data.daily.map((daily: any) => {
                return {
                  city,
                  date: daily?.dt * 1000,
                  degress: _.round(daily.temp.day),
                  description: daily?.weather[0]?.description,
                  icon: `http://openweathermap.org/img/wn/${daily?.weather[0]?.icon}.png`,
                };
              })
            // (this.weather = {
            //   id: data.id,
            //   state: data.sys.country,
            //   city: data.name,
            //   temperature: _.round(data.main.temp),
            //   date: new Date(),
            //   description: data.weather[0].description,
            //   icon: `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`,
            // })
          )
        );
      })
    );
  }
}
