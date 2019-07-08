import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { MovieComponent } from './movie/movie.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MovieFavoriteComponent } from './movie-favorite/movie-favorite.component';
import { AboutComponent } from './about/about.component';
// import { MDBBootstrapModule } from 'angular-bootstrap-md';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    MovieComponent,
    MovieDetailComponent,
    MovieFavoriteComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
