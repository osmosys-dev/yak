import { Component, Input, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Flashcard } from 'src/app/model/flashcard';


@Component({
  selector: 'flashcards-card-list',
  templateUrl: './flashcards-card-list.component.html',
  styleUrls: ['./flashcards-card-list.component.scss'],
})
export class FlashcardsCardListComponent implements OnInit {
  @Input()
  data: Flashcard[];

  segmentCategory = 'conversation';

  conversations$: Observable<Flashcard[]>;
  verbs$: Observable<Flashcard[]>;
  vocabularies$: Observable<Flashcard[]>;

  constructor() { }

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

}
