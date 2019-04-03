import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DadJokesApiService {

  // url of our dad joke api
  url = 'https://icanhazdadjoke.com/';

  // sets header to accep json
  const httpOptions = {
      headers: new HttpHeaders({
          'Accept':  'application/json'
      })
  };

  constructor(private http: HttpClient) { }

    /**
     * Makes api call and returns a random dad joke
     * @returns {Observable<any>}
     */
  getDadJoke(): Observable<any> {
    return this.http.get(this.url, this.httpOptions);
  }
}
