import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Flashcard } from 'src/app/model/flashcard';
import { API_URL } from 'CONSTANTS';

@Injectable()
export class FlashcardsHttpService {
    constructor(private http: HttpClient){}

    getAllFlashcards(): Observable<Flashcard[]>{
        return this.http.get<Flashcard[]>(`${API_URL}/flashcards`);
    }
}
