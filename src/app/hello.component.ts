import { Component, Input } from '@angular/core';
import { Car } from './car.model';

@Component({
  selector: 'hello',
  template: `<h1>Car Details</h1><p>Make: {{car.make}}</p><p>Model: {{car.model}}</p>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent {
  @Input() car: Car;
}
