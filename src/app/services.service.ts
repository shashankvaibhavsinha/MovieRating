import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { environment } from './../environments/environment';
import { Movies, MoviesData } from './movies';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private router:Router, 
              private http: HttpClient) { }

  getTopRateMovies(): Observable<MoviesData>{
    return this.http.get<MoviesData>(environment.topRatedAPI);
  }

  getUpcomingMovies(): Observable<MoviesData>{
    return this.http.get<MoviesData>(environment.upcomingAPI);
  }

}