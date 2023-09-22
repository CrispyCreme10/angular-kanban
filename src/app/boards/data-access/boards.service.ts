import { Injectable } from '@angular/core';
import { Board } from '../models/board';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BoardsService {

  constructor() { }

  getBoards(): Observable<Board[]> {
    const boardCount = Number(localStorage.getItem('boardCount')) ?? 0;
    const boards: Board[] = [];
    for(let i = 0; i < boardCount; i++) {
      const board = this.getBoardSync(i);
      if (board)
        boards.push(board);
    }

    return of(boards);
  }

  getBoard(boardId: number): Observable<Board | null> {
    return of(this.getBoardSync(boardId))
  }

  createBoard(board: Board): Board {
    const boardCount = Number(localStorage.getItem('boardCount')) ?? 0;
    console.log(boardCount);
    const newBoard = { ...board, id: boardCount };
    localStorage.setItem(`board${boardCount}`, JSON.stringify(newBoard));
    const newCount = boardCount + 1;
    localStorage.setItem('boardCount', JSON.stringify(newCount));
    return newBoard;
  }

  private getBoardSync(boardId: number): Board | null {
    const boardStr = localStorage.getItem(`board${boardId}`);
    return boardStr ? JSON.parse(boardStr) as Board : null;
  }
}
