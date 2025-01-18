import { Component, OnInit } from '@angular/core';
import { People } from '../models/models';
import { ApiService } from '../services/api.service';

@Component({
  standalone: false,
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  constructor(public ApiService: ApiService) { }

  peoples: People[] = [];
  isLoading: boolean = false;

  async ngOnInit() {
    this.isLoading = true;
    // Initial load of characters (people)
    this.peoples = await this.ApiService.getCharacters();
    this.isLoading = false;
  }

  getIdFromUrl(url: string): number | null {
    const match = url.match(/\/(\d+)\/$/);
    return match ? parseInt(match[1], 10) : null;
  }

  getCharacterImage(character: any): string {
    const characterId = this.getIdFromUrl(character.url); // Extract ID from the URL
    if (characterId !== null) {
      return `assets/people/${characterId}.jpg`; // Dynamically create the image URL
    }
    return 'assets/placeholder.jpg'; // Fallback image if ID is null
  }

  // Load the next page of characters
  async loadNextPage() {
    this.isLoading = true;
    // Pass the correct URL for the next page of characters
    this.peoples = await this.ApiService.getNextPage<People>(`${this.ApiService.serverUrl}people/`);
    this.isLoading = false;
  }

  // Load the previous page of characters
  async loadPreviousPage() {
    this.isLoading = true;
    // Pass the correct URL for the previous page of characters
    this.peoples = await this.ApiService.getPreviousPage<People>(`${this.ApiService.serverUrl}people/`);
    this.isLoading = false;
  }
}
