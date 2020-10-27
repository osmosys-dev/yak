import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Flashcard } from 'src/app/model/flashcard';
import { API_URL } from 'CONSTANTS';
import { shareReplay } from 'rxjs/operators';

@Injectable()
export class FlashcardsService {
    constructor(private http: HttpClient){}

    loadAllLanguageFlashcards(languageId: string): Observable<Flashcard[]>{
        return this.http.get<Flashcard[]>(`${API_URL}/flashcards`, {
            params: {
                languageId
            }
        }).pipe(
            shareReplay()
        );
    }

}
