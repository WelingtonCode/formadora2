import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokeService {
  private baseUrl = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private http: HttpClient) {}

  getPokemons(limit = 20) {
    return this.http.get<any>(`${this.baseUrl}?limit=${limit}`);
  }

  getPokemonDetails(name: string) {
    return this.http.get<any>(`${this.baseUrl}/${name}`);
  }
}
