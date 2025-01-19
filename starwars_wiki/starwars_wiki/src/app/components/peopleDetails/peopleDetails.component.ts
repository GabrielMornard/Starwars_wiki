import { Component, Input, OnInit } from '@angular/core';
import { People } from 'src/app/models/models';
import { ApiService } from 'src/app/services/api.service';

@Component({
  standalone: false,
  selector: 'app-peopleDetails',
  templateUrl: './peopleDetails.component.html',
  styleUrls: ['./peopleDetails.component.css']
})
export class PeopleDetailsComponent implements OnInit {

  @Input() character! : People;
  @Input() imageLink! : String;

  movies: any[] = []; // Array to hold movie data
  isLoading: boolean = false; // Loading state
  
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.fetchMovies(); // Fetch movies when the component is initialized
  }

  // Fetch movie details from the API for each film link in character.films
  async fetchMovies() {
    this.isLoading = true;
    this.movies = []; // Clear the movies array before adding new movies

    for (const filmUrl of this.character.films) {
      const movie = await this.apiService.getMovieDetails(filmUrl); // Fetch movie details
      this.movies.push(movie); // Add the movie to the movies array
    }

    this.isLoading = false;
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
