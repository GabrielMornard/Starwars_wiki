import { Movie } from './../../models/models';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-movieDetails',
  templateUrl: './movieDetails.component.html',
  styleUrls: ['./movieDetails.component.css']
})
export class MovieDetailsComponent implements OnInit {

  @Input() movie!: Movie;
  constructor() { }

  ngOnInit() {
  }

}
