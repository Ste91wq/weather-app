export interface IWeather {
  id: number;
  state: string;
  city: string;
  temperature: number;
  date: Date | string;
  description: string;
  icon: string;
  degress: number
}
