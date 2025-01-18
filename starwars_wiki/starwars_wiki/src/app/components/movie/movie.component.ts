import { Movie } from '../models/models';
import { ApiService } from './../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  constructor(public ApiService: ApiService) { }

  movies: Movie[] = [];

  async ngOnInit() {
    this.movies = await this.ApiService.getmovies();
  }

  getIdFromUrl(url: string): number | null {
    const match = url.match(/\/(\d+)\/$/);
    return match ? parseInt(match[1], 10) : null;
  }

  getMovieImage(movie: any): string {
    const movieId = this.getIdFromUrl(movie.url); // Extract ID from the URL
    if (movieId !== null) {
      return `assets/movie/${movieId}.jpg`; // Dynamically create the image URL
    }
    return 'assets/placeholder.jpg'; // Fallback image if ID is null
  }

}
