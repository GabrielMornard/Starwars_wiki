import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom, lastValueFrom } from 'rxjs';
import { Movie, People, Planet, Species, Starship, Vehicle } from 'src/app/models/models';


interface PaginatedResponse<T> {
  results: T[];
  next: string | null;
  previous: string | null;
}

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  serverUrl = 'https://swapi.dev/api/';

  private nextUrl: string | null = null;
  private previousUrl: string | null = null;

  constructor(public http: HttpClient) {}

  // Generic method for fetching data with pagination
  private async getPaginatedData<T>(url: string): Promise<PaginatedResponse<T>> {
    const result = await lastValueFrom(this.http.get<PaginatedResponse<T>>(url));
    this.nextUrl = result.next;
    this.previousUrl = result.previous;
    return result;
  }

  // Generic method to get the next page of any data type
  async getNextPage<T>(url: string): Promise<T[]> {
    if (this.hasNextPage()) {
      const result = await this.getPaginatedData<T>(this.nextUrl!);
      return result.results; // Return only the results array
    } else {
      console.log('No next page');
      return [];
    }
  }

  // Generic method to get the previous page of any data type
  async getPreviousPage<T>(url: string): Promise<T[]> {
    if (this.hasPreviousPage()) {
      const result = await this.getPaginatedData<T>(this.previousUrl!);
      return result.results; // Return only the results array
    } else {
      console.log('No previous page');
      return [];
    }
  }

  // Check if there is a next page
  hasNextPage(): boolean {
    return this.nextUrl !== null;
  }

  // Check if there is a previous page
  hasPreviousPage(): boolean {
    return this.previousUrl !== null;
  }

  // Fetch movies
  async getMovies(): Promise<Movie[]> {
    const result = await lastValueFrom(
      this.http.get<any>(this.serverUrl + 'films/')
    );
    console.log(result);
    return result.results;
  }

  // Fetch characters
  async getCharacters(pageUrl: string = `${this.serverUrl}people/`): Promise<People[]> {
    const result = await this.getPaginatedData<People>(pageUrl);
    console.log(result);
    return result.results;
  }

  // Fetch starships
  async getStarships(pageUrl: string = `${this.serverUrl}starships/`): Promise<Starship[]> {
    const result = await this.getPaginatedData<Starship>(pageUrl);
    console.log(result);
    return result.results;
  }

  // Fetch vehicles
  async getVehicles(pageUrl: string = `${this.serverUrl}vehicles/`): Promise<Vehicle[]> {
    const result = await this.getPaginatedData<Vehicle>(pageUrl);
    console.log(result);
    return result.results;
  }

  // Fetch species
  async getSpecies(pageUrl: string = `${this.serverUrl}species/`): Promise<Species[]> {
    const result = await this.getPaginatedData<Species>(pageUrl);
    console.log(result);
    return result.results;
  }

  // Fetch planets
  async getPlanets(pageUrl: string = `${this.serverUrl}planets/`): Promise<Planet[]> {
    const result = await this.getPaginatedData<Planet>(pageUrl);
    console.log(result);
    return result.results;
  }

  getMovieDetails(url: string): Promise<any> {
    return firstValueFrom(this.http.get<any>(url)); // Utiliser firstValueFrom pour convertir l'observable en promesse
  }
}
