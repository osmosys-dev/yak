import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LanguagesRoutingModule } from './languages-routing.module';

import { LanguagesHomePage } from './languages-home.page';

import { LanguagesHttpService } from './services/languages-http.service';
import { LanguageCardComponent } from './components/language-card/language-card.component';
import { LanguageListComponent } from './components/language-list/language-list.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    IonicModule,
    LanguagesRoutingModule
  ],
  declarations: [LanguagesHomePage, LanguageCardComponent, LanguageListComponent],
  providers: [LanguagesHttpService]
})
export class LanguagesModule {}
