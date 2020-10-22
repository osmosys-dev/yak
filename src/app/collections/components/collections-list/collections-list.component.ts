import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';
import { Collection } from 'src/app/model/collection';
import { CollectionsHttpService } from 'src/app/services/collections-http.service';


@Component({
  selector: 'collections-list',
  templateUrl: './collections-list.component.html',
  styleUrls: ['./collections-list.component.scss'],
})
export class CollectionsListComponent implements OnInit {

  collections$: Observable<Collection[]>;

  constructor(private collectionHttpService: CollectionsHttpService) { }

  ngOnInit() {
    this.reload();
  }

  reload() {
     this.collections$ = this.collectionHttpService.findAllCollections().pipe(
       shareReplay()
    );
  }

}
