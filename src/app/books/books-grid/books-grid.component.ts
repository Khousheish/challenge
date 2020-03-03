import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { merge, of } from 'rxjs';
import { catchError, filter, map, startWith, switchMap, tap } from 'rxjs/operators';

import { BookList } from '@Shared/interfaces/books.interface';

import { BooksFacade } from '../store/books.facade';

@Component({
  selector: 'ch-books-grid',
  templateUrl: './books-grid.component.html',
  styleUrls: ['./books-grid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BooksGridComponent implements AfterViewInit {
  public displayedColumns: string[] = ['kind', 'id', 'etag', 'selfLink'];
  public data: MatTableDataSource<BookGrid>;
  public resultsLength: number = 0;
  public isLoadingResults: boolean = true;

  @ViewChild(MatPaginator) private readonly paginator: MatPaginator;
  @ViewChild(MatSort) private readonly sort: MatSort;

  public constructor(
    private readonly booksFacade: BooksFacade,
    private readonly changeDetectorRef: ChangeDetectorRef,
  ) {
  }

  public ngAfterViewInit(): void {
    // If the user changes the sort order, reset back to the first page.
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        startWith({}),
        tap(() => {
          this.isLoadingResults = true;
          this.booksFacade.getBooks(this.paginator.pageIndex + 1);
        }),
        switchMap(() => this.booksFacade.booksPending$),
        filter((pending: boolean) => !pending),
        switchMap(() => this.booksFacade.booksList$),
        map((books: BookList) => {
          // Flip flag to show that loading has finished.
          this.isLoadingResults = false;
          this.resultsLength = books.totalItems;

          return books.items;
        }),
        catchError(() => {
          this.isLoadingResults = false;

          return of([]);
        }),
      ).subscribe((data: []) => {
        // this.data = data;
        this.data = new MatTableDataSource(data);
        this.changeDetectorRef.markForCheck();
      });
  }

  public applyFilter(event: Event): void {
    const filterValue: string = (event.target as HTMLInputElement).value;

    this.data.filter = filterValue.trim().toLowerCase();

    if (this.data.paginator) {
      this.data.paginator.firstPage();
    }
  }
}

export interface BookGrid {
  kind: string;
  id: string;
  etag: string;
  selfLink: string;
}
