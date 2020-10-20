import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { IonicModule } from '@ionic/angular';

import { LanguagePageRoutingModule } from './language-routing.module';

import { LanguagePage } from './language.page';
import { LanguageCardListComponent } from './components/language-card-list/language-card-list.component';
import { LanguageCardComponent } from './components/language-card/language-card.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LanguagePageRoutingModule
  ],
  declarations: [LanguagePage, LanguageCardListComponent, LanguageCardComponent]
})
export class LanguagePageModule {}
