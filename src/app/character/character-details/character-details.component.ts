import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from '../models/character';
import { CharacterService } from '../service/character.service';
import { Subject, pipe, EMPTY } from 'rxjs';
import { takeUntil, catchError } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'ngb-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.scss']
})
export class CharacterDetailsComponent implements OnInit, OnDestroy {

  character: Character;
  destroy = new Subject();

  form: FormGroup;

  constructor(private route: ActivatedRoute,
              private characterService: CharacterService,
              private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.form = this.initForm();

    const characterId: string = this.route.snapshot.paramMap.get('id');
    this.characterService
      .getCharacterById(parseInt(characterId, 10))
      .pipe(takeUntil(this.destroy.asObservable()))
      .subscribe(character => {
        this.character = character;
        this.form.patchValue(character);
      });
  }

  private initForm(): FormGroup {
    return this.fb.group({
      id: [''],
      name: ['', Validators.required],
      culture: [''],
    });
  }

  ngOnDestroy() {
    this.destroy.next();
    this.destroy.complete();
  }

  saveCharacter() {
    if (this.form.invalid) {
      console.log('Formular ist invalid');
      return;
    }
    const character = this.form.value;
    if (character.id) {
      this.characterService.updateCharacter(character)
        .pipe(
          catchError(() => {
            this.errorHandler();
            return EMPTY;
          }),
          takeUntil(this.destroy.asObservable())
        )
        .subscribe(() => console.log('Update war erfolgreich'));
    }
  }

  private errorHandler() {
    alert('Beim Speichern gab es Probleme');
  }

}
