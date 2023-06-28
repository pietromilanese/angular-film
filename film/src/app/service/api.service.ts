import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Film, FilmDetail } from '../models/film.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl: string = 'https://api.tvmaze.com/search/shows?q='

  constructor(private http: HttpClient) { }

  getFilmByName(name: string) {
    return this.http.get<Film[]>(`${this.baseUrl}${name}`)
  }

  getFilmById(id: number) {
    return this.http.get<FilmDetail>(`https://api.tvmaze.com/shows/${id}`)
  }


}
