import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';
import { Movies, MoviesData } from '../movies';

@Component({
  selector: 'app-topratedmovie',
  templateUrl: './top-rated-movie.component.html',
  styleUrls: ['./top-rated-movie.component.css']
})
export class TopRatedMovieComponent implements OnInit {

  constructor(private Services: ServicesService) { }
  result: MoviesData;

  ngOnInit(): void {
    this.getTopRatedMovies();
  }
  getTopRatedMovies() {
    this.Services.getTopRateMovies().subscribe(
      res => {
        this.result = res;
      },
      err => {
        console.log(err);
      }
    );
  }
}
