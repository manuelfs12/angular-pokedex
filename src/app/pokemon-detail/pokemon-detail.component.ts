import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { PokemonService } from '../pokemon.service';
import { Pokemon } from 'pokenode-ts';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css'],
})
export class PokemonDetailComponent implements OnInit {
  pokemon: Pokemon | undefined;
  constructor(private route: ActivatedRoute, private pokemonService: PokemonService, private location: Location) {}

  ngOnInit(): void {
    this.getPokemon();
  }

  getPokemon(): void {
    const name = String(this.route.snapshot.paramMap.get('name'));
    this.pokemonService.getPokemon(name).subscribe((pokemon) => (this.pokemon = pokemon));
  }

  goBack(): void {
    this.location.back();
  }
}
