import { Injectable } from '@angular/core';
import { Character } from '../models/character';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  private readonly baseUrl: string = 'http://localhost:3000/characters';

  characters: Array<Character> = [
    { id: 1, name: 'Daenerys Targaryen', culture: 'Valyrian' },
    { id: 2, name: 'Jon Snow', culture: 'Northmen' }
  ];

  constructor(private http: HttpClient) { }

  getAll(): Observable<Array<Character>> {
    return this.http.get<Array<Character>>(this.baseUrl);
  }

  getCharacterById(id: number): Observable<Character> {
    return this.http.get<Character>(`${this.baseUrl}/${id}`);
    // return this.http.get<Character>(this.baseUrl + '/' + id);
  }

  updateCharacter(character: Character): Observable<any> {
    return this.http.put(`${this.baseUrl}/${character.id}`, character);
  }
}
