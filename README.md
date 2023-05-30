# WeatherApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.4.

#### Run the project locally

- Install dependencies: `npm install`
- Setup environment variables in `/src/environments/environment.ts`
- Run server with hot reload at http://localhost:4200: `ng serve`

_environment.ts example_

```javascript
export const environment = {
  production: false,
  weatherUrl: xxx,
  weatherWeekUrl: xxx,
  apiKey: xxx,
  geolocationUrl: xxx,
};
```

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
