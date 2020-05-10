import { Component, OnInit, Input } from '@angular/core';
import { PokemonModel } from 'src/app/models/pokemon.model';
import { PokemonService } from 'src/app/services/pokemon.service';
import { ModalService } from 'src/app/_modal';
import { PokemonDetailModel } from 'src/app/models/pokemon-detail.model';

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
  public pokemonDetails: PokemonDetailModel;

  constructor(private service: PokemonService, private modalService: ModalService) { }

  ngOnInit(): void {
  }

  detail(pokemon: PokemonModel) {
    this.service.getPokemonDetail(pokemon.url).subscribe(data=>{
      this.pokemonDetails = data;
    }, error => {
      console.error(error);
    });
    this.openModal('custom-modal');
  }

  callMorePokemons() {
    this.loading = true;
    this.service.getAllPokemons(this.offset, this.offset + 20).subscribe(data => {
      this.pokemons = this.service.orderListPokemonByName(data);
      this.loading = false;
      this.offset = this.offset + 20;
    }, error => {
      this.loading = false;
      console.error(error);
    });
  }

  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

}
