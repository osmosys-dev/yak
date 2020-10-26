import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Language } from 'src/app/model/language';
import { API_URL } from 'CONSTANTS';



@Injectable()
export class LanguagesHttpService {

  constructor(private http: HttpClient) {}

  getAllLanguages(): Observable<Language[]> {
    return this.http
      .get<Language[]>(`${API_URL}/languages`);
  }

  getLanguageByUrl(languageUrl: string): Observable<Language> {
    return this.http.get<Language>(`${API_URL}/languages/${languageUrl}`);
  }
}
