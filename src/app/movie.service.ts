import { Injectable } from '@angular/core';
import { fakeMovies } from './fake-movie';
import { Movie } from 'src/models/movies';
//
@Injectable({
  providedIn: 'root' // trích xuất dc dữ liệu ra
})
export class MovieService {
  getMovie() : Movie[]{
    return fakeMovies; // lấy dữ liệu từ local storage
  }

  constructor() { }
}
