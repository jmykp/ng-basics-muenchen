import { Injectable } from '@angular/core';
import { Character } from '../models/character';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  characters: Array<Character> = [
    { id: 1, name: 'Daenerys Targaryen', culture: 'Valyrian' },
    { id: 2, name: 'Jon Snow', culture: 'Northmen' }
  ];

  constructor() { }

  getAll(): Array<Character> {
    return this.characters;
  }

  getCharacterById(id: number): Character {
    return this.characters.find(character => character.id === id);
  }
}
