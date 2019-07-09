import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { MovieComponent } from './movie/movie.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MovieFavoriteComponent } from './movie-favorite/movie-favorite.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', component: AuthComponent },
  { path: 'movie', component: MovieComponent },
  { path: 'movie/:title', component: MovieDetailComponent },
  { path: 'movie-favorite', component: MovieFavoriteComponent },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
