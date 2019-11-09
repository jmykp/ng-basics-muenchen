import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './basic-layout/dashboard/dashboard.component';
import { BookComponent } from './book/book/book.component';
import { BookListComponent } from './book/book-list/book-list.component';
import { CharacterListComponent } from './character/character-list/character-list.component';
import { CharacterDetailsComponent } from './character/character-details/character-details.component';


const routes: Routes = [{
  path: '',
  component: DashboardComponent
}, {
  path: 'books',
  component: BookListComponent
}, {
  path: 'characters',
  children: [
    {
      path: '',
      component: CharacterListComponent
    },
    {
      path: ':id',
      component: CharacterDetailsComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
