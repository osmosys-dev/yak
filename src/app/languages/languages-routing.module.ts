import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LanguagesPage } from './languages.page';

const routes: Routes = [
  {
    path: '',
    component: LanguagesPage
  },
  {
    path: ':languageId',
    loadChildren: () => import ('../flashcards/flashcards.module').then(m => m.FlashcardsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LanguagesRoutingModule {}
