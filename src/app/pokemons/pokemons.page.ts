import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.page.html',
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class PokemonsPage {
  pokemons = ['Pikachu', 'Bulbasaur', 'Charmander', 'Squirtle'];
}
