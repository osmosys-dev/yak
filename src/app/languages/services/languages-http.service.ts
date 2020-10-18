import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Language } from 'src/app/model/language';
import { Flashcard } from 'src/app/model/flashcard';


@Injectable()
export class LanguagesHttpService {

  API_URL = 'http://localhost:9000/yak-api';
  constructor(private http: HttpClient) {}

  findAllLanguages(): Observable<Language[]> {
    return this.http
      .get<Language[]>(`${this.API_URL}/languages`);
  }

  findLanguageByUrl(languageUrl: string): Observable<Language> {
    return this.http.get<Language>(`${this.API_URL}/languages/${languageUrl}`);
  }

  findFlashcards(): Observable<Flashcard[]> {
    return this.http.get<Flashcard[]>(`${this.API_URL}/flashcards`);
  }

  updateLanguage(languageId: string, changes: Partial<Language>) {
    return this.http.put(`${this.API_URL}/languages/${languageId}`, changes);
  }

  deleteLanguage(languageId: string) {
    return this.http.delete(`${this.API_URL}/languages/${languageId}`);
  }

  createLanguage(changes: Partial<Language>) {
    return this.http.post(`${this.API_URL}/languages`, changes);
  }
}
