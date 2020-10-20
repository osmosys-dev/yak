import { Component, Input, OnInit } from '@angular/core';
import { Language } from 'src/app/model/language';

@Component({
  selector: 'collection-card',
  templateUrl: './collection-card.component.html',
  styleUrls: ['./collection-card.component.scss'],
})
export class CollectionCardComponent implements OnInit {

  @Input()
  languages: Language[];
  constructor() { }

  ngOnInit() {}

}
