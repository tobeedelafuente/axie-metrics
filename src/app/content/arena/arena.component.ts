import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ArenaMetrics } from '../../models/models';
import { ArenaDialogComponent } from './arena-dialog/arena-dialog.component';

const DATA: ArenaMetrics[] = [
  { date: 'September 3, 2021', win: 9, lose: 3 },
  { date: 'September 4, 2021', win: 8, lose: 6 },
  { date: 'September 5, 2021', win: 6, lose: 9 },
  { date: 'September 6, 2021', win: 8, lose: 6 },
  { date: 'September 7, 2021', win: 4, lose: 11 },
  { date: 'September 8, 2021', win: 8, lose: 7 },
  { date: 'September 9, 2021', win: 10, lose: 6 },
  { date: 'September 10, 2021', win: 12, lose: 5 },
  { date: 'September 11, 2021', win: 13, lose: 7 },
];

@Component({
  selector: 'app-arena',
  templateUrl: './arena.component.html',
  styleUrls: ['./arena.component.scss']
})
export class ArenaComponent implements OnInit {
  displayedColumns: string[] = ['date', 'win', 'lose', 'winRate'];
  dataSource = DATA;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ArenaDialogComponent, {
      width: '300px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log(result);
      }
    });
  }

  onAdd() {
    
  }
}
