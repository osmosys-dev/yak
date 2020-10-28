import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FlashcardsPage } from './flashcards.page';

const routes: Routes = [
  {
    path: '',
    component: FlashcardsPage
  },
  {
    path: ':flashcardId',
    loadChildren: () => import('../categories/categories.module').then(m => m.CategoriesPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FlashcardsPageRoutingModule {}
