import { Component } from '@angular/core';
import { Car } from './car.model';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  car: Car[] = [{
    make: 'Toyota',
    model: 2015
  },
  {
    make: 'Mercedes',
    model: 2009
  }]
}
