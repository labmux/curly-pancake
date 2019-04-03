import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './views/main/main.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { HomeComponent } from './views/home/home.component';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { CounterComponent } from './views/counter/counter.component';
import { StarIncreasePipe } from './views/counter/star-increase.pipe';
import { StarDecreasePipe } from './views/counter/star-decrease.pipe';
import { HttpClientModule } from '@angular/common/http';
import { DadJokesComponent } from './views/dad-jokes/dad-jokes.component';
import { DadJokesApiService } from './models/services/dad-jokes-api.service';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HomeComponent,
    NotFoundComponent,
    CounterComponent,
    StarIncreasePipe,
    StarDecreasePipe,
    DadJokesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    HttpClientModule
  ],
  providers: [ DadJokesApiService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
