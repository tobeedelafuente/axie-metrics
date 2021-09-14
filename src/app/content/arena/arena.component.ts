import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ArenaMetrics } from '../../models/models';
import { compareDates } from '../../utils/dates';
import { ArenaDialogComponent } from './arena-dialog/arena-dialog.component';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-arena',
  templateUrl: './arena.component.html',
  styleUrls: ['./arena.component.scss']
})
export class ArenaComponent implements OnInit {
  private collections: AngularFirestoreCollection<ArenaMetrics>;
  metrics: Observable<ArenaMetrics[]>;
  displayedColumns: string[] = ['date', 'win', 'lose', 'winRate'];
  dataSource: ArenaMetrics[] = [];

  constructor(private dialog: MatDialog, private afs: AngularFirestore) {
    this.collections = afs.collection<ArenaMetrics>('arena');
    this.metrics = this.collections.valueChanges();
  }

  ngOnInit(): void {
    this.metrics.subscribe(data => {
      data = data.sort((a, b) => {
        return b.date.seconds - a.date.seconds;
      })
      this.dataSource = data;
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ArenaDialogComponent, {
      width: '300px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (!this.dataSource.find(d => compareDates(d.date.toDate(), result.date))) {
          this.collections.add(result);
        }
      }
    });
  }

  getTotalWins(): number {
    return this.dataSource.map(t => t.win).reduce((acc, value) => acc + value, 0);
  }

  getTotalLosses(): number {
    return this.dataSource.map(t => t.lose).reduce((acc, value) => acc + value, 0);
  }

  getAverageWinRate(): number {
    const wins = this.getTotalWins();
    const losses = this.getTotalLosses();
    return wins / (wins + losses);
  }
}
