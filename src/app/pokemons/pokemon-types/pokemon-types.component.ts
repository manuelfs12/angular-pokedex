import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon-types',
  templateUrl: './pokemon-types.component.html',
  styleUrls: ['./pokemon-types.component.css'],
})
export class PokemonTypesComponent implements OnInit {
  @Input() pokemonType: string = '';
  constructor() {}

  ngOnInit(): void {}
  stylePokemonType(pokemonType: string): string {
    switch (pokemonType) {
      case 'normal':
        return 'bg-neutral-500';
      case 'flying':
        return 'bg-indigo-500';
      case 'fire':
        return 'bg-orange-600';
      case 'psychic':
        return 'bg-pink-500';
      case 'water':
        return 'bg-blue-500';
      case 'bug':
        return 'bg-lime-500';
      case 'grass':
        return 'bg-green-500';
      case 'rock':
        return 'bg-amber-800';
      case 'electric':
        return 'bg-yellow-600';
      case 'ghost':
        return 'bg-violet-800';
      case 'ice':
        return 'bg-sky-400';
      case 'dark':
        return 'bg-neutral-900';
      case 'fighting':
        return 'bg-red-900';
      case 'dragon':
        return 'bg-violet-500';
      case 'poison':
        return 'bg-purple-500';
      case 'steel':
        return 'bg-gray-500';
      case 'ground':
        return 'bg-orange-700';
      case 'fairy':
        return 'bg-rose-400';
    }
    return '';
  }
}
