import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CollectionsPage } from './collections.page';

const routes: Routes = [
  {
    path: '',
    component: CollectionsPage
  },
  {
    path: ':languageUrl',
    loadChildren: () => import ('../languages/languages.module').then(m => m.LanguagesPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CollectionsRoutingModule {}
