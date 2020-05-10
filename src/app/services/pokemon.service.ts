import { Injectable } from '@angular/core';
import { IPokemonService } from './pokemon-service.interface';
import { PokemonModel } from '../models/pokemon.model';
import { IPokemonRepository } from '../repositories/pokemon-repository.interface';
import { HttpParams, HttpHeaders } from '@angular/common/http';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { PokemonRepository } from '../repositories/pokemon.repository';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs';
import { PokemonDetailModel } from '../models/pokemon-detail.model';

@Injectable()
export class PokemonService implements IPokemonService {

  constructor(private pokemonRepository: PokemonRepository){
  }

  getAllPokemons(offset: number, limit: number): Observable<Array<PokemonModel>>{
    let observable = Observable.create(observer => {
        this.pokemonRepository.get('pokemon/?offset='+offset+'&limit='+limit, null).subscribe((data)=>{
          observer.next(this.orderListPokemonByName(data.results));
        }, (erro)=>{console.error(erro); return []});
    });
    return observable;
  }

  getPokemonDetail(url: string): Observable<PokemonDetailModel>{
    let observable = Observable.create(observer => {
        let id = this.getIdPokemonFromUrl(url);
        this.pokemonRepository.get('pokemon/'+id, null).subscribe((data)=>{
          observer.next(data);
        }, (erro)=>{console.error(erro); return []});
    });
    return observable;
  }

  orderListPokemonByName(pokemons: Array<PokemonModel>){
    pokemons.sort(function(a, b){
      if(a.name < b.name) { return -1; }
      if(a.name > b.name) { return 1; }
      return 0;
    });
    return pokemons;
  }

  getIdPokemonFromUrl(url: string): string{
    var parts = url.split('/');
    var lastSegment = parts.pop() || parts.pop();
    return lastSegment;
  }
}
