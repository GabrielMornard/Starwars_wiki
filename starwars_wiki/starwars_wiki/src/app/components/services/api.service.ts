import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Movie, People } from '../models/models';

interface PeopleResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: People[];
}

@Injectable({
    providedIn: 'root'
  })
export class ApiService {

serverUrl = "https://swapi.dev/api/";

private nextUrl: string | null = null;
private previousUrl: string | null = null;

constructor(public http: HttpClient) { }

async getmovies(): Promise<Movie[]> {
    const result = await lastValueFrom(this.http.get<any>(this.serverUrl + "films/"));
    console.log(result);
    return result.results;
}

async getCharacters(pageUrl: string = `${this.serverUrl}people/`): Promise<People[]> {
  const result = await lastValueFrom(this.http.get<PeopleResponse>(pageUrl));
  this.nextUrl = result.next;
  this.previousUrl = result.previous;

  console.log(result); // Optional, for debugging
  return result.results;
}
hasNextPage(): boolean {
  return this.nextUrl !== null;
}

// Method to check if there is a previous page
hasPreviousPage(): boolean {
  return this.previousUrl !== null;
}

// Get next page of characters
async getNextPage(): Promise<People[]> {
  if (this.hasNextPage()) {
    return this.getCharacters(this.nextUrl!);
  } else {
    console.log('No next page');
    return [];
  }
}

// Get previous page of characters
async getPreviousPage(): Promise<People[]> {
  if (this.hasPreviousPage()) {
    return this.getCharacters(this.previousUrl!);
  } else {
    console.log('No previous page');
    return [];
  }
}
}