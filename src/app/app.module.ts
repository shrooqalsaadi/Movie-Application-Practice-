import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { SerchComponent } from './pages/serch/serch.component';
import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';
import {HttpClientModule} from '@angular/common/http';
import { MovieApiServiseService } from './service/movie-api-servise.service';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SerchComponent,
    MovieDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule


  ],
  providers: [ MovieApiServiseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
