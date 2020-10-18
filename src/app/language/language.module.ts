import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LanguagePageRoutingModule } from './language-routing.module';

import { LanguagePage } from './language.page';
import { LanguageCardComponent } from './components/language-card/language-card.component';
import { LanguageListComponent } from './components/language-list/language-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LanguagePageRoutingModule
  ],
  declarations: [LanguagePage, LanguageCardComponent, LanguageListComponent]
})
export class LanguagePageModule {}
