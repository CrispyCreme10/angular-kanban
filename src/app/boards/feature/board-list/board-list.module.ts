import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoardListRoutingModule } from './board-list-routing.module';
import { BoardListComponent } from './board-list.component';


@NgModule({
  declarations: [BoardListComponent],
  imports: [
    CommonModule,
    BoardListRoutingModule
  ]
})
export class BoardListModule { }
