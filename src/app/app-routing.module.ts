import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './basic-layout/dashboard/dashboard.component';
import { BookComponent } from './book/book/book.component';
import { BookListComponent } from './book/book-list/book-list.component';


const routes: Routes = [{
  path: '',
  component: DashboardComponent
}, {
  path: 'books',
  component: BookListComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
