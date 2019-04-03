import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DadJokesApiService {

  url = 'https://icanhazdadjoke.com/';

    const httpOptions = {
        headers: new HttpHeaders({
            'Accept':  'application/json'
        })
    };

  constructor(private http: HttpClient) { }

  getDadJoke(): Observable<any> {
    return this.http.get(this.url, this.httpOptions);
  }
}
