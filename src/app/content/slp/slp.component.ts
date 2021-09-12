import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SlpDialogComponent } from './slp-dialog/slp-dialog.component';
import { SLPMetrics } from 'src/app/models/models';

const DATA: SLPMetrics[] = [
  { date: 'September 3, 2021', slp: 100 },
];

@Component({
  selector: 'app-slp',
  templateUrl: './slp.component.html',
  styleUrls: ['./slp.component.scss']
})
export class SlpComponent implements OnInit {
  displayedColumns: string[] = ['date', 'slp', 'php'];
  dataSource = DATA;
  conversion = 4.42;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(SlpDialogComponent, {
      width: '300px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log(result);
      }
    });
  }
}
