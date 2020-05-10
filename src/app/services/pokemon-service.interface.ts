import { PokemonModel } from '../models/pokemon.model';
import { Observable } from 'rxjs/internal/Observable';

export interface IPokemonService {
  getAllPokemons(offset: number, limit: number): Observable<Array<PokemonModel>>
  searchPokemonByName(name: string):Array<PokemonModel>
  orderListPokemonByName(pokemons: Array<PokemonModel>): Array<PokemonModel>;
}
