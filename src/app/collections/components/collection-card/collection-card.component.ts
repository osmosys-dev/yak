import { Component, Input, OnInit } from '@angular/core';
import { Collection } from 'src/app/model/collection';

@Component({
  selector: 'collection-card',
  templateUrl: './collection-card.component.html',
  styleUrls: ['./collection-card.component.scss'],
})
export class CollectionCardComponent implements OnInit {

  @Input()
  collections: Collection[];
  constructor() { }

  ngOnInit() {}

}
