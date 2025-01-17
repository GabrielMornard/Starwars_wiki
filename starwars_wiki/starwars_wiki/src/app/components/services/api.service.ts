import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Movie } from '../models/models';

@Injectable({
    providedIn: 'root'
  })
export class ApiService {

serverUrl = "https://swapi.dev/api/";

constructor(public http: HttpClient) { }

async getmovies(): Promise<Movie[]> {
    const result = await lastValueFrom(this.http.get<any>(this.serverUrl + "films/"));
    console.log(result);
    return result.results;
  }
}
