import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LanguageCardComponent } from './components/language-card/language-card.component';

import { LanguagesPage } from './languages.page';

const routes: Routes = [
  {
    path: '',
    component: LanguagesPage
  },
  {
    path: ':languageUrl',
    component: LanguageCardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LanguagesPageRoutingModule {}
