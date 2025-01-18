import { PeopleComponent } from './components/people/people.component';
import { MovieComponent } from './components/movie/movie.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { StarshipComponent } from './components/starship/starship.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    MovieComponent,
    PeopleComponent,
    StarshipComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
