import { TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { Spied } from 'app/spec/utils.type';
import { State } from 'app/app.store';

import { getBooks } from './books.actions';
import { BooksFacade } from './books.facade';

describe('BooksFacade', (): void => {
  let facade: BooksFacade;
  let mockedStore: Spied<Store<State>>;

  beforeEach((): void => {
    mockedStore = jasmine.createSpyObj('Store', ['dispatch', 'pipe']);

    TestBed.configureTestingModule({
      providers: [
        BooksFacade,
        { provide: Store, useValue: mockedStore },
      ],
    });

    facade = TestBed.inject(BooksFacade);
  });

  describe('getBooks', (): void => {
    it('should dispatch getBooks action', (): void => {
      facade.getBooks(1);

      // tslint:disable-next-line:no-unbound-methods
      expect(mockedStore.dispatch).toHaveBeenCalledTimes(1);
      // tslint:disable-next-line:no-unbound-methods
      expect(mockedStore.dispatch).toHaveBeenCalledWith(getBooks({pageIndex: 1}));
    });
  });
});
