import { Injectable } from '@angular/core';
import { PokemonClient, Pokemon } from 'pokenode-ts';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor() {}
  pokemons: Pokemon[] = [];
  getPokedex(): void {
    const api = new PokemonClient();
    api
      .listPokemons(0, 151)
      .then((data) => {
        data.results.forEach((pokemon) => {
          this.getPokemonUrl(pokemon.url);
        });
      })
      .catch((error) => console.error(error));
  }
  getPokemonUrl(pokemonUrl: string): void {
    fetch(pokemonUrl)
      .then((res) => res.json())
      .then((data: Pokemon) => {
        this.pokemons.push(data);
        this.pokemons.sort((a, b) => (a.id > b.id ? 1 : -1));
      });
  }
}