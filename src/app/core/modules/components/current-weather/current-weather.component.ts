import { Component, OnDestroy, OnInit } from '@angular/core';

import { IWeather } from 'src/app/shared/model/weather';
import { Subscription } from 'rxjs';
import { WeatherService } from 'src/app/shared/services/weather.service';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css'],
})
export class CurrentWeatherComponent implements OnInit, OnDestroy {

  weatherWeek: IWeather[];
  subscriptionWeatherweek: Subscription;

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void { }

  ngOnDestroy(): void {
    this.subscriptionWeatherweek.unsubscribe();
  }

  getWeatherWeek(city: string): Subscription {
    return this.subscriptionWeatherweek = this.weatherService.getWeatherWeek(city).subscribe(
      data => this.weatherWeek = data
    );
  }
}
