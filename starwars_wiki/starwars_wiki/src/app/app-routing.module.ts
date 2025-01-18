import { AppComponent } from './app.component';
import { MovieComponent } from './components/movie/movie.component';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeopleComponent } from './components/people/people.component';
import { StarshipComponent } from './components/starship/starship.component';

const routes: Routes = [
  { path: '', redirectTo: '/movie', pathMatch: 'full' },
  { path: 'movie', component: MovieComponent },
  { path: 'people', component: PeopleComponent },
  { path: 'starship', component: StarshipComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
