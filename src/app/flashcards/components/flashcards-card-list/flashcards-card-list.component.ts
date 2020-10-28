import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { combineLatest, Observable, of } from 'rxjs';
import {  map } from 'rxjs/operators';
import { Conversation } from 'src/app/model/conversation';
import { Flashcard } from 'src/app/model/flashcard';
import { Verb } from 'src/app/model/verb';
import { Vocabulary } from 'src/app/model/vocabulary';
import { FlashcardsService } from '../../services/flashcards.service';

interface FlashcardData {
  flashcard: Flashcard;
  categories: Conversation[] | Verb[] | Vocabulary[];
}

@Component({
  selector: 'flashcards-card-list',
  templateUrl: './flashcards-card-list.component.html',
  styleUrls: ['./flashcards-card-list.component.scss'],
})
export class FlashcardsCardListComponent implements OnInit {
  @Input()
  data: Flashcard[];

  flashcardData$: Observable<FlashcardData>;

  segmentCategory = 'conversation';

  conversations$: Observable<Flashcard[]>;
  verbs$: Observable<Flashcard[]>;
  vocabularies$: Observable<Flashcard[]>;

  constructor(
    private route: ActivatedRoute,
    private flashcardsService: FlashcardsService,
    // private categoriesService: CategoriesService
    ) {}

  ngOnInit() {
    this.reload();
  }

  reload() {
    const flashcards$ = of(this.data);

    this.conversations$ = flashcards$.pipe(
      map((flashcards) => flashcards.filter((flashcard) => flashcard.category === 'CONVERSATION')),
    );
    this.verbs$ = flashcards$.pipe(
      map((flashcards) => flashcards.filter((flashcard) => flashcard.category === 'VERB'))
    );
    this.vocabularies$ = flashcards$.pipe(
      map((flashcards) => flashcards.filter((flashcard) => flashcard.category === 'VOCABULARY'))
    );
 }

 loadData(){

  const flashcardId = this.route.snapshot.paramMap.get('flashcardId');

  // const flashcard$ = this.flashcardsService.loadFlashcardById(flashcardId);

  // const categories$ = this.categoriesService.loadAllFlashcardCategories(flashcardId);

  // const flashcards$ = this.flashcardsService.loadAllLanguageFlashcards(languageId);

  // this.flashcardData$ = combineLatest([flashcard$, categories$]).pipe(
  //   map(([flashcard, categories]) => {
  //     return {flashcard, categories};
  //   }),
  // );


 }

}
