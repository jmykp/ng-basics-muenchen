import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterListComponent } from './character-list/character-list.component';
import { CharacterDetailsComponent } from './character-details/character-details.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [CharacterListComponent, CharacterDetailsComponent],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule
  ]
})
export class CharacterModule { }
