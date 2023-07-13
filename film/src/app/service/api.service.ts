import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Film, FilmDetail } from '../models/film.model';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl: string = 'https://api.tvmaze.com/'

  constructor(private http: HttpClient) { }

  getFilmByName(name: string) {
    return this.http.get<Film[]>(`${this.baseUrl}search/shows?q=${name}`)
  }

  getFilmById(id: string) {
    return this.http.get<FilmDetail>(`${this.baseUrl}shows/${id}`)
  }


}
