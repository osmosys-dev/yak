import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { IonicModule } from '@ionic/angular';

import { LanguagesPageRoutingModule } from './languages-routing.module';

import { LanguagesPage } from './languages.page';
import { LanguagesCardListComponent } from './components/languages-card-list/languages-card-list.component';
import { LanguageCardComponent } from './components/language-card/language-card.component';
import { EditLanguageCardComponent } from './components/edit-language-card/edit-language-card.component';
import { CreateLanguageCardComponent } from './components/create-language-card/create-language-card.component';
import { LanguagesHttpService } from '../services/languages-http.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LanguagesPageRoutingModule
  ],
  declarations: [LanguagesPage, LanguagesCardListComponent, LanguageCardComponent, EditLanguageCardComponent, CreateLanguageCardComponent],
  providers: [LanguagesHttpService]
})
export class LanguagesPageModule {}
