import { TestBed } from '@angular/core/testing';

import { PokemonRepository } from './pokemon.repository';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';

describe('PokemonRepository', () => {
  let repositorie: PokemonRepository;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [PokemonRepository]
  }));

  it('should be created', () => {
    const repositorie: PokemonRepository = TestBed.get(PokemonRepository);
    expect(repositorie).toBeTruthy();
   });
});
