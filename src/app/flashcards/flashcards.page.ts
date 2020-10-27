import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LanguagesService } from '../languages/services/languages.service';
import { Flashcard } from '../model/flashcard';
import { Language } from '../model/language';
import { CreateFlashcardCardComponent } from './components/create-flashcard-card/create-flashcard-card.component';
import { FlashcardsService } from './services/flashcards.service';

interface LanguageData {
  language: Language;
  flashcards: Flashcard[];
}

@Component({
  selector: 'app-language',
  templateUrl: './flashcards.page.html',
  styleUrls: ['./flashcards.page.scss'],
})
export class FlashcardsPage implements OnInit {

  data$: Observable<LanguageData>;

  constructor(
    private route: ActivatedRoute,
    private languagesService: LanguagesService,
    private flashcardsService: FlashcardsService,
    private modalController: ModalController) {}

  ngOnInit() {
    this.loadData();
  }

  loadData(){

    const languageId = this.route.snapshot.paramMap.get('languageId');

    const language$ = this.languagesService.loadLanguageById(languageId);

    const flashcards$ = this.flashcardsService.loadAllLanguageFlashcards(languageId);

    this.data$ = combineLatest([language$, flashcards$]).pipe(
      map(([language, flashcards]) => {
        return {language, flashcards};
      }),
    );

  }

  async showCreateModal(){
    const modal = await this.modalController.create({
      component: CreateFlashcardCardComponent
    });

    await modal.present();
  }

}
