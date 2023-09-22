import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Board } from '../../models/board';
import { Observable } from 'rxjs';
import { BoardsService } from '../../data-access/boards.service';
import { Navigation, Router } from '@angular/router';

@Component({
  selector: 'app-board-list',
  templateUrl: './board-list.component.html',
  styleUrls: ['./board-list.component.scss']
})
export class BoardListComponent implements OnInit {
  @ViewChild('tempBoardName') tempBoardName!: ElementRef<HTMLInputElement>;

  boards$!: Observable<Board[]>;
  isTempBoardShowing: boolean = false;

  constructor(
    private boardService: BoardsService,
    private router: Router
  ) {

  }
  
  ngOnInit(): void {
    this.boards$ = this.boardService.getBoards();
  }

  toggleTempBoard(): void { 
    console.log(this.isTempBoardShowing);
    this.isTempBoardShowing = !this.isTempBoardShowing;
    console.log(this.isTempBoardShowing);
    if (this.isTempBoardShowing)
      this.tempBoardName.nativeElement.focus();
  }

  createBoard(boardName: string): void {
    this.boardService.createBoard({
      id: -1,
      name: boardName,
      lanes: []
    })
  }

  tempBoardNameBlur(event: FocusEvent) {
    const target = event.target as HTMLInputElement;
    this.isTempBoardShowing = false;
    if (target.value) {
      this.createBoard(target.value);
    }
  }

  openBoard(boardIndex: number) {
    this.router.navigate(['boards', boardIndex]);
  }
}
