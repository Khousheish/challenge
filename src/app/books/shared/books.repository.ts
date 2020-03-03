import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { BookList } from '@Shared/interfaces/books.interface';

@Injectable()
export class BooksRepository {

  public constructor(
    private readonly httpClient: HttpClient,
  ) {
  }

  public getBooks(page: number = 1): Observable<BookList> {
    let params: HttpParams = new HttpParams();
    params = params.set('startIndex', (30 * page).toString());
    params = params.set('maxResults', '30');

    return this.httpClient.get<BookList>(`https://www.googleapis.com/books/v1/volumes`, {params})
  }
}
