import { Component, OnInit, Input } from '@angular/core';
import { PokemonModel } from 'src/app/models/pokemon.model';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})

export class PokemonListComponent implements OnInit {

  @Input() pokemons: Array<PokemonModel> = [];
  private offset = 20;
  public loading: boolean = false;
  public query: string;

  constructor(private service: PokemonService) { }

  ngOnInit(): void {
  }

  detail(pokemon: PokemonModel) {
    console.log(pokemon);
  }

  callMorePokemons() {
    this.loading = true;
    this.service.getAllPokemons(this.offset, this.offset + 20).subscribe(data => {
      this.pokemons = this.service.orderListPokemonByName(data);
      this.loading = false;
      this.offset = this.offset + 20;
    }, error => {
      this.loading = false;
    });
  }

}
