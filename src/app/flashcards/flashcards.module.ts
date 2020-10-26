import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { FlashcardsPageRoutingModule } from './flashcards-routing.module';

import { FlashcardsPage } from './flashcards.page';
import { FlashcardsCardListComponent } from './components/flashcards-card-list/flashcards-card-list.component';
import { FlashcardCardComponent } from './components/flashcard-card/flashcard-card.component';
import { EditFlashcardCardComponent } from './components/edit-flashcard-card/edit-flashcard-card.component';
import { CreateFlashcardCardComponent } from './components/create-flashcard-card/create-flashcard-card.component';

import { LanguagesHttpService } from '../languages/services/languages-http.service';
import { FlashcardsHttpService } from './services/flashcards-http.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FlashcardsPageRoutingModule
  ],
  declarations: [
    FlashcardsPage,
    FlashcardsCardListComponent,
    FlashcardCardComponent,
    EditFlashcardCardComponent,
    CreateFlashcardCardComponent
  ],
  providers: [LanguagesHttpService, FlashcardsHttpService]
})
export class FlashcardsPageModule {}
