import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Flashcard } from 'src/app/model/flashcard';
import { Conversation } from 'src/app/model/conversation';
import { Verb } from 'src/app/model/verb';
import { Vocabulary } from 'src/app/model/vocabulary';
import { FlashcardsHttpService } from '../../services/flashcards-http.service';

@Component({
  selector: 'flashcards-card-list',
  templateUrl: './flashcards-card-list.component.html',
  styleUrls: ['./flashcards-card-list.component.scss'],
})
export class FlashcardsCardListComponent implements OnInit {
  category = 'conversation';

  // conversations$: Observable<Conversation[]>;
  // verbs$: Observable<Verb[]>;
  // vocabularies$: Observable<Vocabulary[]>;
  conversations$: Observable<Flashcard[]>;
  verbs$: Observable<Flashcard[]>;
  vocabularies$: Observable<Flashcard[]>;

  constructor(private flashcardsHttpService: FlashcardsHttpService) { }

  ngOnInit() {
    this.reload();
  }

  reload() {
    const flashcards$ = this.flashcardsHttpService.getAllFlashcards().pipe(
      shareReplay()
    );

    this.conversations$ = flashcards$.pipe(
      map((flashcards) => flashcards.filter((flashcard) => flashcard.category === 'CONVERSATION'))
    );
    this.verbs$ = flashcards$.pipe(
      map((flashcards) => flashcards.filter((flashcard) => flashcard.category === 'VERB'))
    );
    this.vocabularies$ = flashcards$.pipe(
      map((flashcards) => flashcards.filter((flashcard) => flashcard.category === 'VOCABULARY'))
    );
    // const languages$ = this.languagesHttpService.findAllCollections().pipe(
    //   shareReplay()
    // );

    // this.conversations$ = languages$.pipe(
    //   map((languages) => languages.filter((language) => language.category === 'CONVERSATION'))
    // );

    // this.verbs$ = languages$.pipe(
    //   map((languages) => languages.filter((language) => language.category === 'VERB'))
    // );
    // this.vocabularies$ = languages$.pipe(
    //   map((languages) => languages.filter((language) => language.category === 'VOCABULARY'))
    // );
 }

}
