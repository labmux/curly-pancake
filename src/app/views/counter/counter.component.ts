import {Component} from '@angular/core';
import {StarIncreasePipe} from './star-increase.pipe';
import {StarDecreasePipe} from './star-decrease.pipe';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
  providers: [ StarIncreasePipe, StarDecreasePipe ]
})
export class CounterComponent {
  counter: number;  // number counter
  stars: string;    // contains the stars
  output: string;   // is the concatenation of the counter and the stars

    /**
     * Initiates all our values and calls our pipes
     * @param {StarIncreasePipe} addStars
     * @param {StarDecreasePipe} removeStars
     */
  constructor(private addStars: StarIncreasePipe, private removeStars: StarDecreasePipe) {
    this.counter = 0;
    this.output = '';
    this.stars = '';
  }

    /**
     * Decreases counter by one, and removes a star every 5 counts
     */
  decreaseCounter(): void {
    //  assures we dont end up with a negative number
    if (this.counter > 0) {
        this.counter--;
        this.stars = this.removeStars.transform(this.counter, this.stars);  //  pipe that removes stars
        this.output = this.counter + ' ' + this.stars;
    }
  }

    /**
     * Increases counter by one, and removes a star every 5 counts
     */
  increaseCounter() {
    this.counter++;
    this.stars = this.addStars.transform(this.counter, this.stars);   // pipe that adds stars
    this.output = this.counter + ' ' + this.stars;
  }
}
