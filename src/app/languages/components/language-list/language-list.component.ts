import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { shareReplay, tap } from 'rxjs/operators';
import { Language } from 'src/app/model/language';
import { LanguagesHttpService } from '../../services/languages-http.service';

@Component({
  selector: 'yak-language-list',
  templateUrl: './language-list.component.html',
  styleUrls: ['./language-list.component.scss'],
})
export class LanguageListComponent implements OnInit {

  languages$: Observable<Language[]>;

  constructor(private languageHttpService: LanguagesHttpService) { }

  ngOnInit() {
    this.reload();
  }

  reload() {
     this.languages$ = this.languageHttpService.findAllLanguages().pipe(
       tap(val => console.log(val)),
       shareReplay()
    );
  }

}
