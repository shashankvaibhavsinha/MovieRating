import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private router:Router, private http: HttpClient) { }

  getTopRateMovies(url): Observable<any>{
    return this.http.get(url);
  }

  getUpcomingMovies(url): Observable<any>{
    return this.http.get(url);
  }

}
