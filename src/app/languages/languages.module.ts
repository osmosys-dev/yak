import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule } from '@ionic/angular';

import { LanguagesRoutingModule } from './languages-routing.module';

import { LanguagesPage } from './languages.page';
import { LanguagesListComponent } from './components/languages-list/languages-list.component';
import { LanguageCardComponent } from './components/language-card/language-card.component';

import { LanguagesService } from './services/languages.service';



@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    IonicModule,
    LanguagesRoutingModule
  ],
  declarations: [LanguagesPage, LanguagesListComponent, LanguageCardComponent],
  providers: [LanguagesService]
})
export class LanguagesModule {}
