import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {
  currentUrl: string;

  constructor(private router: Router) {
    this.currentUrl = this.router.url;
  }

  ngOnInit() {
  }

}
