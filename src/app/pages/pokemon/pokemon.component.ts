import { Component, OnInit, HostListener } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';
import { PokemonModel } from 'src/app/models/pokemon.model';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {

  public loading: boolean = true;
  public pokemons: Array<PokemonModel> = [];

  constructor(private service: PokemonService) { }

  ngOnInit(): void {
    this.getAllPokemons();
  }

  getAllPokemons(){
    this.service.getAllPokemons(0,20).subscribe(data => {
      this.pokemons = data;
      this.loading = false;
    }, error => {
      this.loading = false;
    });
  }
}
