import {Component, EventEmitter} from '@angular/core';
import {StarIncreasePipe} from './star-increase.pipe';
import {StarDecreasePipe} from './star-decrease.pipe';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
  providers: [ StarIncreasePipe, StarDecreasePipe ]
})
export class CounterComponent {
  counterChange: EventEmitter<null> = new EventEmitter<null>();
  counter: number;
  output: string;
  stars: string;

  constructor(private addStars: StarIncreasePipe, private removeStars: StarDecreasePipe) {
    this.counter = 0;
  }

  decreaseCounter() {
    if (this.counter > 0) {
        this.counter--;
        this.stars = this.removeStars.transform(this.counter, this.stars);
        this.output = this.counter + ' ' + this.stars;
        this.counterChange.emit();
    }
  }

  increaseCounter() {
    this.counter++;
    this.stars = this.addStars.transform(this.counter);
    this.output = this.counter + ' ' + this.stars;
    this.counterChange.emit();
  }
}
