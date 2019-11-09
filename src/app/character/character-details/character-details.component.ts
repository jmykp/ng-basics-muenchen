import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from '../models/character';
import { CharacterService } from '../service/character.service';

@Component({
  selector: 'ngb-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.scss']
})
export class CharacterDetailsComponent implements OnInit {

  character: Character;

  constructor(private route: ActivatedRoute, private characterService: CharacterService) { }

  ngOnInit() {
    const characterId: string = this.route.snapshot.paramMap.get('id');
    this.character = this.characterService
      .getCharacterById(parseInt(characterId, 10));
  }

}
