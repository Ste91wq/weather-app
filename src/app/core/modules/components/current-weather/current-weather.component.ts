import { Component, OnInit } from '@angular/core';

import { IWeather } from 'src/app/shared/model/weather';
import { WeatherService } from 'src/app/shared/services/weather.service';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css'],
})
export class CurrentWeatherComponent implements OnInit {
  weatherWeek: IWeather;

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void { }

  getWeatherWeek(city: string) {
    return this.weatherService
      .getWeatherWeek(city)
      .subscribe((data) => (this.weatherWeek = data));
  }
}
