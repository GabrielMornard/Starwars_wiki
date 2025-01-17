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

}
