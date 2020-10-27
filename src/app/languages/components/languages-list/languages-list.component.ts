import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Language } from 'src/app/model/language';
import { LanguagesService } from '../../services/languages.service';


@Component({
  selector: 'languages-list',
  templateUrl: './languages-list.component.html',
  styleUrls: ['./languages-list.component.scss'],
})
export class LanguagesListComponent implements OnInit {

  languages$: Observable<Language[]>;

  constructor(private languagesService: LanguagesService) { }

  ngOnInit() {
    this.reload();
  }

  reload() {
     this.languages$ = this.languagesService.loadAllLanguages();
  }

}
