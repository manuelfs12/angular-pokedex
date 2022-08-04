import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon-types',
  templateUrl: './pokemon-types.component.html',
  styleUrls: ['./pokemon-types.component.css']
})
export class PokemonTypesComponent implements OnInit {

  @Input() pokemonType: string = '';
  constructor() { }

  ngOnInit(): void {

  }
  stylePokemonType(pokemonType: string): string {
    switch (pokemonType) {
      case 'grass':
        return 'bg-green-500';
      case 'poison':
        return 'bg-purple-500';
    }
    return '';
  }
}
