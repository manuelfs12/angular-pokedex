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
  pokedex: Pokemon[] = [];
  ngOnInit(): void {
    this.pokemonService.getPokedex();
    this.pokedex = this.pokemonService.pokedex;
  }
}
