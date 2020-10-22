import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Collection } from '../model/collection';



@Injectable()
export class CollectionsHttpService {

  API_URL = 'http://localhost:9000/yak-api';
  constructor(private http: HttpClient) {}

  findAllCollections(): Observable<Collection[]> {
    return this.http
      .get<Collection[]>(`${this.API_URL}/collections`);
  }

  findCollectionByUrl(collectionUrl: string): Observable<Collection> {
    return this.http.get<Collection>(`${this.API_URL}/collections/${collectionUrl}`);
  }

  updateCollection(collectionId: string, changes: Partial<Collection>) {
    return this.http.put(`${this.API_URL}/collections/${collectionId}`, changes);
  }

  deleteCollection(collectionId: string) {
    return this.http.delete(`${this.API_URL}/collections/${collectionId}`);
  }

  createCollection(changes: Partial<Collection>) {
    return this.http.post(`${this.API_URL}/collections`, changes);
  }
}
