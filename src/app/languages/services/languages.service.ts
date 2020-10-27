import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Language } from 'src/app/model/language';
import { API_URL } from 'CONSTANTS';
import { shareReplay } from 'rxjs/operators';



@Injectable()
export class LanguagesService {

  constructor(private http: HttpClient) {}

  loadAllLanguages(): Observable<Language[]> {
    return this.http
      .get<Language[]>(`${API_URL}/languages`).pipe(
        shareReplay()
      );
  }

  loadLanguageById(languageId: string): Observable<Language> {
    return this.http.get<Language>(`${API_URL}/languages/${languageId}`).pipe(
      shareReplay()
    );
  }
}
