import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-topratedmovie',
  templateUrl: './top-rated-movie.component.html',
  styleUrls: ['./top-rated-movie.component.css']
})
export class TopRatedMovieComponent implements OnInit {

  constructor(private Services: ServicesService) { }
  public getUrl;
  result: any = [];

  ngOnInit(): void {
    this.getUrl = 'https://api.themoviedb.org/3/movie/top_rated?api_key=5fbddf6b517048e25bc3ac1bbeafb919';
    this.getTopRatedMovies();
  }
  getTopRatedMovies() {
    this.Services.getTopRateMovies(this.getUrl).subscribe(
      res => {
        this.result = res;
      },
      err => {
        console.log(err);
      }
    );
  }
}
