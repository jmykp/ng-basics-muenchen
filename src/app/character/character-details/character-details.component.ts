import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from '../models/character';
import { CharacterService } from '../service/character.service';
import { Subject, pipe } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'ngb-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.scss']
})
export class CharacterDetailsComponent implements OnInit, OnDestroy {

  character: Character;
  destroy = new Subject();

  constructor(private route: ActivatedRoute, private characterService: CharacterService) { }

  ngOnInit() {
    const characterId: string = this.route.snapshot.paramMap.get('id');
    this.characterService
      .getCharacterById(parseInt(characterId, 10))
      .pipe(takeUntil(this.destroy.asObservable()))
      .subscribe(character => this.character = character);
  }

  ngOnDestroy() {
    this.destroy.next();
    this.destroy.complete();
  }

}
