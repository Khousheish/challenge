/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BooksRepository } from './books.repository';

describe('Service: BooksRepository', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BooksRepository]
    });
  });

  it('should ...', inject([BooksRepository], (service: BooksRepository) => {
    expect(service).toBeTruthy();
  }));
});
