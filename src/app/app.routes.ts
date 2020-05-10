//Angular
import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PageDontFindComponent } from './pages/page-dont-find/page-dont-find.component';
import { PokemonComponent } from './pages/pokemon/pokemon.component';



export const ROUTES: Routes = [
  {
    path: '', component: HomeComponent,
    children: [
      { path: '', component: PokemonComponent },
      { path: '**', component: PageDontFindComponent }
    ]
  },
]
