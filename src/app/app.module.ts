import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { PageDontFindComponent } from './pages/page-dont-find/page-dont-find.component';
import { ROUTES } from './app.routes';
import { PokemonRepository } from './repositories/pokemon.repository';
import { PokemonService } from './services/pokemon.service';
import { HttpClientModule } from '@angular/common/http';
import { PokemonComponent } from './pages/pokemon/pokemon.component';
import { PokemonListComponent } from './pages/pokemon/components/pokemon-list/pokemon-list.component';
import { SearchPipe } from './shared/pipes/search.pipe';
import { FormsModule } from '@angular/forms';
import { LoadingComponent } from './components/loading/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageDontFindComponent,
    LoadingComponent,
    PokemonListComponent,
    PokemonComponent,
    SearchPipe,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    HttpClientModule,
    FormsModule
  ],
  providers: [
    PokemonRepository,
    PokemonService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
