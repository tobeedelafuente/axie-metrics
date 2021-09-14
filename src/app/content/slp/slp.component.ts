import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SlpDialogComponent } from './slp-dialog/slp-dialog.component';
import { SLPMetrics } from '../../models/models';
import { compareDates } from '../../utils/dates';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-slp',
  templateUrl: './slp.component.html',
  styleUrls: ['./slp.component.scss']
})
export class SlpComponent implements OnInit {
  private collections: AngularFirestoreCollection<SLPMetrics>;
  metrics: Observable<SLPMetrics[]>;
  displayedColumns: string[] = ['date', 'slp', 'php'];
  dataSource: SLPMetrics[] = [];
  conversion = 4.03;

  constructor(private dialog: MatDialog, private afs: AngularFirestore) {
    this.collections = afs.collection<SLPMetrics>('slp');
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
    const dialogRef = this.dialog.open(SlpDialogComponent, {
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

  getTotalSlp(): number {
    return this.dataSource.map(t => t.slp).reduce((acc, value) => acc + value, 0);
  }

  getTotalDaysPlayed(): number {
    return this.dataSource.length;
  }

  getTotalEarnings(): number {
    return this.getTotalSlp() * this.conversion;
  }
}
