import { TestBed } from '@angular/core/testing';

import { PokemonRepository } from './pokemon.repository';

describe('PokemonRepository', () => {
  let repositorie: PokemonRepository;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    repositorie = TestBed.inject(PokemonRepository);
  });

  it('should be created', () => {
    expect(repositorie).toBeTruthy();
  });
});
