import { Component, OnInit } from '@angular/core';
import { Starship } from 'src/app/models/models';
import { ApiService } from '../../services/api.service';

@Component({
  standalone: false,
  selector: 'app-starship',
  templateUrl: './starship.component.html',
  styleUrls: ['./starship.component.css']
})
export class StarshipComponent implements OnInit {

  constructor(public ApiService: ApiService) { }

  starships: Starship[] = [];
  isLoading: boolean = false;

  async ngOnInit() {
    this.isLoading = true;
    // Initial load of starships
    this.starships = await this.ApiService.getStarships();
    this.isLoading = false;
  }

  // Load the next page of starships
  async loadNextPage() {
    this.isLoading = true;
    // Pass the correct URL for the next page of starships
    this.starships = await this.ApiService.getNextPage<Starship>(`${this.ApiService.serverUrl}starships/`);
    this.isLoading = false;
  }

  // Load the previous page of starships
  async loadPreviousPage() {
    this.isLoading = true;
    // Pass the correct URL for the previous page of starships
    this.starships = await this.ApiService.getPreviousPage<Starship>(`${this.ApiService.serverUrl}starships/`);
    this.isLoading = false;
  }

  // Safely extract the ID from a URL string
  getIdFromUrl(url: String | null): number | null {
    if (!url) {
      return null; // Return null if the URL is null or undefined
    }
    const match = url.match(/\/(\d+)\/$/);
    return match ? parseInt(match[1], 10) : null;
  }

  // Get the image for a starship using the extracted ID
  getStarshipImage(starship: Starship): string {
    const starshipId = this.getIdFromUrl(starship.url); // Extract ID from the URL
    if (starshipId !== null) {
      return `assets/starship/${starshipId}.jpg`; // Dynamically create the image URL
    }
    return 'assets/placeholder.jpg'; // Fallback image if ID is null
  }
}
