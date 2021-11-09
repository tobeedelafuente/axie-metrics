import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EarningDialogComponent } from './earning-dialog/earning-dialog.component';
import { EarningMetrics } from '../../models/models';
import { compareDates } from '../../utils/dates';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-earning',
  templateUrl: './earning.component.html',
  styleUrls: ['./earning.component.scss']
})
export class EarningComponent implements OnInit {
  private collections: AngularFirestoreCollection<EarningMetrics>;
  metrics: Observable<EarningMetrics[]>;
  displayedColumns: string[] = ['date', 'slp', 'conversion', 'earning'];
  dataSource: EarningMetrics[] = [];

  constructor(
    private dialog: MatDialog,
    private afs: AngularFirestore) {
    this.collections = afs.collection<EarningMetrics>('earning');
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
    const dialogRef = this.dialog.open(EarningDialogComponent, {
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

  getTotalEarnings(): number {
    return this.dataSource.map(t => t.slp * t.conversion).reduce((acc, value) => acc + value, 0);
  }
}
