import { inject, TestBed } from '@angular/core/testing';

import { BooksRepository } from './books.repository';

xdescribe('Service: BooksRepository', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        BooksRepository,
      ],
    });
  });

  it('should ...', inject([BooksRepository], (service: BooksRepository) => {
    expect(service).toBeTruthy();
  }));
});
