import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Language } from 'src/app/model/language';
import { LanguagesHttpService } from 'src/app/services/languages-http.service';

@Component({
  selector: 'languages-card-list',
  templateUrl: './languages-card-list.component.html',
  styleUrls: ['./languages-card-list.component.scss'],
})
export class LanguagesCardListComponent implements OnInit {

  languages$: Observable<Language[]>;

  constructor(private languagesHttpService: LanguagesHttpService) { }

  ngOnInit() {}

  reload() {

 }

}
