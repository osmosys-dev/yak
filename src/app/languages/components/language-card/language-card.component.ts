import { Component, Input, OnInit } from '@angular/core';
import { Language } from 'src/app/model/language';

@Component({
  selector: 'yak-language-card',
  templateUrl: './language-card.component.html',
  styleUrls: ['./language-card.component.scss'],
})
export class LanguageCardComponent implements OnInit {

  @Input()
  languages: Language[];
  constructor() { }

  ngOnInit() {}

}
