import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'pokenode-ts';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css'],
})
export class PokemonsComponent implements OnInit {
  constructor(private pokemonService: PokemonService) {}
  pokemons: Pokemon[] = [];
  ngOnInit(): void {
    this.getPokedex(0, 151);
  }
  getPokedex(offset: number, limit: number) {
    this.pokemonService.getPokedex(offset, limit);
    this.pokemons = this.pokemonService.pokemons;
  }
}
