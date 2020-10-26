import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';
import { Language } from 'src/app/model/language';
import { LanguagesHttpService } from '../../services/languages-http.service';


@Component({
  selector: 'languages-list',
  templateUrl: './languages-list.component.html',
  styleUrls: ['./languages-list.component.scss'],
})
export class LanguagesListComponent implements OnInit {

  languages$: Observable<Language[]>;

  constructor(private languagesHttpService: LanguagesHttpService) { }

  ngOnInit() {
    this.reload();
  }

  reload() {
     this.languages$ = this.languagesHttpService.getAllLanguages().pipe(
       shareReplay()
    );
  }

}
