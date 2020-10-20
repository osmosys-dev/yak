import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule } from '@ionic/angular';

import { CollectionRoutingModule } from './collection-routing.module';

import { CollectionPage } from './collection.page';
import { CollectionListComponent } from './components/collection-list/collection-list.component';
import { CollectionCardComponent } from './components/collection-card/collection-card.component';

import { LanguagesHttpService } from '../services/languages-http.service';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    IonicModule,
    CollectionRoutingModule
  ],
  declarations: [CollectionPage, CollectionListComponent, CollectionCardComponent],
  providers: [LanguagesHttpService]
})
export class CollectionModule {}
