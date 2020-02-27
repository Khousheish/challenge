import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksGridComponent } from './books-grid/books-grid.component';

const routes: Routes = [
  {
    path: '',
    component: BooksGridComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class BooksRoutingModule {
}

// export const routedComponents: ComponentsType = [
//   CompanyCreateComponent,
//   CompanyEditComponent,
//   CompaniesGridComponent,
//   CompanyViewComponent,
// ];
