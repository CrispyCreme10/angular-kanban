import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('../board-list/board-list.module').then(
        m => m.BoardListModule
      ),
  },
  {
    path: ':id',
    loadChildren: () =>
      import('../board-detail/board-detail.module').then(
        m => m.BoardDetailModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BoardShellRoutingModule { }
