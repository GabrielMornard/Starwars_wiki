import { AppComponent } from './app.component';
import { MovieComponent } from './components/movie/movie.component';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: AppComponent, children:[
    { path: '', redirectTo: '/movie', pathMatch: 'full' },
    {path: 'movie', component: MovieComponent }
  ]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
