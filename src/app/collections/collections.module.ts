import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule } from '@ionic/angular';

import { CollectionsRoutingModule } from './collections-routing.module';

import { CollectionsPage } from './collections.page';
import { CollectionsListComponent } from './components/collections-list/collections-list.component';
import { CollectionCardComponent } from './components/collection-card/collection-card.component';
import { CollectionsHttpService } from '../services/collections-http.service';



@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    IonicModule,
    CollectionsRoutingModule
  ],
  declarations: [CollectionsPage, CollectionsListComponent, CollectionCardComponent],
  providers: [CollectionsHttpService]
})
export class CollectionsModule {}
