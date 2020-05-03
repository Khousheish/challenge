import { inject, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { BooksRepository } from './books.repository';

describe('Service: BooksRepository', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        BooksRepository,
      ],
    });
  });

  it('should ...', inject([BooksRepository], (service: BooksRepository) => {
    expect(service).toBeTruthy();
  }));
});
