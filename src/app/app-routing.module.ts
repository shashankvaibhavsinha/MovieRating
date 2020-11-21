import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopRatedMovieComponent } from './top-rated-movie/top-rated-movie.component';
import { UpcomingMoviesComponent } from './upcoming-movies/upcoming-movies.component';


const routes: Routes = [
  {path: 'topratedmovies', component: TopRatedMovieComponent},
  {path: 'upcomingmovies', component: UpcomingMoviesComponent},
  {path: '', component: TopRatedMovieComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
