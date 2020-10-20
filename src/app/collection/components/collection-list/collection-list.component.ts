import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';
import { Language } from 'src/app/model/language';
import { LanguagesHttpService } from 'src/app/services/languages-http.service';


@Component({
  selector: 'collection-list',
  templateUrl: './collection-list.component.html',
  styleUrls: ['./collection-list.component.scss'],
})
export class CollectionListComponent implements OnInit {

  languages$: Observable<Language[]>;

  constructor(private languageHttpService: LanguagesHttpService) { }

  ngOnInit() {
    this.reload();
  }

  reload() {
     this.languages$ = this.languageHttpService.findAllLanguages().pipe(
       shareReplay()
    );
  }

}
