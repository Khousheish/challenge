import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable()
export class BooksGridResolver implements Resolve<Observable<boolean>> {
  public resolve(): Observable<boolean> {
    return of(true);
  }
}
