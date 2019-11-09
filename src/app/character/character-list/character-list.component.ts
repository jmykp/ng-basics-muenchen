import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../service/character.service';
import { Character } from '../models/character';

@Component({
  selector: 'ngb-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit {

  characters: Array<Character>;

  constructor(private characterService: CharacterService) { }

  ngOnInit() {
    this.characters = this.characterService.getAll();
  }

}
