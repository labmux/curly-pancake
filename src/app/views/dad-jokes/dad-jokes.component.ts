import { Component, OnInit } from '@angular/core';
import { DadJokesApiService } from '../../models/services/dad-jokes-api.service';

@Component({
  selector: 'app-dad-jokes',
  templateUrl: './dad-jokes.component.html',
  styleUrls: ['./dad-jokes.component.scss']
})
export class DadJokesComponent implements OnInit {

  joke: string;
  constructor(private jokeApi: DadJokesApiService) { }

  ngOnInit() {
    this.jokeApi.getDadJoke().subscribe( results => {
      this.joke = results.joke;
    });
  }

}
