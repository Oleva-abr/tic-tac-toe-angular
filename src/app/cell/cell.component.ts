import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-cell',
  standalone: true,
  imports: [],
  templateUrl: './cell.component.html',
  styleUrl: './cell.component.css'
})
export class CellComponent {
  @Input() value: 'X' | 'O' | null = null;
  @Output() cellClick = new EventEmitter<void>();

  onClick() {
    this.cellClick.emit();
  }
}
