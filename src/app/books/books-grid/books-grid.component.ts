import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store'
import { getBooks } from '../store/books.actions';

@Component({
  selector: 'ch-books-grid',
  templateUrl: './books-grid.component.html',
  styleUrls: ['./books-grid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BooksGridComponent implements OnInit {

  public constructor(private store: Store<{ book: any }>) {
  }

  public ngOnInit() {
    this.store.dispatch(getBooks());
    this.store.select((book) => book).subscribe((x) => {
      console.log(x);
    });
  }
}
