import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/models/movies';
import { fakeMovies } from '../fake-movie';
import { MovieService } from '../movie.service';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movie: Movie = {
    id: 1,
    name: 'Avenger',
    releaseYear: 1977
  }
  // movies =fakeMovies;

  movies: Movie[];
  constructor(private movieService: MovieService) {

   } // được gọi đầu tiên khi compoenent được khởi tạo
getMovieFromService():void // hàm lấy dữ liệu từ mảng service vô moive
 {
  this.movies =this.movieService.getMovie();
}


  ngOnInit(): void { //được gọi sau contructer
    this.getMovieFromService();
  }
  //Action when select a Movie in List item
  selectedMovie: Movie;
  onSelect(movie: Movie): void {
    this.selectedMovie = movie;
    // alert(`selectedMovie = ${JSON.stringify(this.selectedMovie)}`);
  }

}
