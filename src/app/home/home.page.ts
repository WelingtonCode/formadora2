import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  standalone: true,
  imports: [IonicModule],
})
export class HomePage {
  constructor(private router: Router) {}

  goToDetails() {
    this.router.navigate(['/pokemons'
    ]);
  }

  openPokeAPI() {
    window.open('https://pokeapi.co', '_blank');
  }
}
