import { Component } from '@angular/core';
import { IWeather } from 'src/app/shared/model/weather.model';
import { WeatherService } from 'src/app/shared/services/weather.service';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css'],
})
export class CurrentWeatherComponent {
  public weatherWeek!: IWeather[];

  constructor(private weatherService: WeatherService) {}

  public getWeatherWeek(city: string): void {
    this.weatherService
      .getWeatherWeek(city)
      .subscribe((data) => (this.weatherWeek = data));
  }
}
