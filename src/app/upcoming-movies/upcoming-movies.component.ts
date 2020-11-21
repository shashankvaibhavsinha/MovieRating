import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-upcomingmovies',
  templateUrl: './upcoming-movies.component.html',
  styleUrls: ['./upcoming-movies.component.css']
})
export class UpcomingMoviesComponent implements OnInit {

  constructor(private Services: ServicesService) { }
  public getUrl;
  result: any = [];

  ngOnInit(): void {
    this.getUrl = 'https://api.themoviedb.org/3/movie/upcoming?api_key=5fbddf6b517048e25bc3ac1bbeafb919';
    this.getUpcomingMovies();
  }
  getUpcomingMovies() {
    this.Services.getUpcomingMovies(this.getUrl).subscribe(
      res => {
        this.result = res;
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  }
}
