import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardDetailComponent } from './board-detail.component';

describe('BoardDetailComponent', () => {
  let component: BoardDetailComponent;
  let fixture: ComponentFixture<BoardDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BoardDetailComponent]
    });
    fixture = TestBed.createComponent(BoardDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
