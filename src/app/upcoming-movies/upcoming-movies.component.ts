import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';
import { Movies, MoviesData } from '../movies';

@Component({
  selector: 'app-upcomingmovies',
  templateUrl: './upcoming-movies.component.html',
  styleUrls: ['./upcoming-movies.component.css']
})
export class UpcomingMoviesComponent implements OnInit {

  constructor(private Services: ServicesService) { }
  result: MoviesData;

  ngOnInit(): void {
    this.getUpcomingMovies();
  }
  getUpcomingMovies() {
    this.Services.getUpcomingMovies().subscribe(
      res => {
        this.result = res;
      },
      err => {
        console.log(err);
      }
    );
  }
}
