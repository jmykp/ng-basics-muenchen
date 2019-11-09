import { Component, OnInit, OnDestroy } from '@angular/core';
import { CharacterService } from '../service/character.service';
import { Character } from '../models/character';
import { Subscription, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'ngb-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit, OnDestroy {

  characters: Array<Character>;

  destroy: Subject<any> = new Subject();

  constructor(private characterService: CharacterService) { }

  ngOnInit() {
    this.characterService.getAll()
      .pipe(
        takeUntil(this.destroy.asObservable())
      )
      .subscribe(characters => this.characters = characters);
  }

  ngOnDestroy() {
    this.destroy.next();
  }

}
