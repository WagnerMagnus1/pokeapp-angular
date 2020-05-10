import { PokemonModel } from '../models/pokemon.model';
import { Observable } from 'rxjs/internal/Observable';
import { PokemonDetailModel } from '../models/pokemon-detail.model';

export interface IPokemonService {
  getAllPokemons(offset: number, limit: number): Observable<Array<PokemonModel>>
  getPokemonDetail(id: string): Observable<PokemonDetailModel>
  orderListPokemonByName(pokemons: Array<PokemonModel>): Array<PokemonModel>;
}
