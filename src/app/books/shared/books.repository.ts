import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class BooksRepository {

  public constructor(
    private readonly httpClient: HttpClient,
  ) {
  }

  getBooks() {
    let params: HttpParams = new HttpParams();
    params = params.set('q', '123s')

    return this.httpClient.get<any>(`https://www.googleapis.com/books/v1/volumes`, {params})
  }
}
