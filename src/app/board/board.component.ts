import { Component } from '@angular/core';
import { CellComponent } from '../cell/cell.component';

import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-board',
  standalone: true,
  imports: [CellComponent, CommonModule],
  templateUrl: './board.component.html',
  styleUrl: './board.component.css',

})
export class BoardComponent {
  currentPlayer: 'X' | 'O' = 'X';
  cells: ('X' | 'O' | null)[] = new Array(9).fill(null);
  winner: 'X' | 'O' | null = null;
  index: any;

  handleClick(index: number) {
    if (!this.cells[index] && !this.winner) {
      this.cells[index] = this.currentPlayer;
      this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
      this.checkWinner();
    }
  }

  trackByIndex(index: number, cell: any): number {
    return index;
  }

  checkWinner() {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (const line of lines) {
      const [a, b, c] = line;
      if (this.cells[a] && this.cells[a] === this.cells[b] && this.cells[a] === this.cells[c]) {
        this.winner = this.cells[a];
        break;
      }
    }
  }

  restartGame() {
    this.currentPlayer = 'X';
    this.cells = new Array(9).fill(null);
    this.winner = null;
  }

}
