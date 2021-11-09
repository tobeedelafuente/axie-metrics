import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormGroup, FormBuilder } from '@angular/forms';
import { SlpDialogComponent } from './slp-dialog/slp-dialog.component';
import { SLPMetrics, EarningMetrics } from '../../models/models';
import { compareDates } from '../../utils/dates';
import { ConversionService } from 'src/app/service/conversion.service';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-slp',
  templateUrl: './slp.component.html',
  styleUrls: ['./slp.component.scss']
})
export class SlpComponent implements OnInit {
  private slpCollection: AngularFirestoreCollection<SLPMetrics>;
  private earningCollection: AngularFirestoreCollection<EarningMetrics>;
  slpMetrics: Observable<SLPMetrics[]>;
  earningMetrics: Observable<EarningMetrics[]>;
  displayedColumns: string[] = ['date', 'slp', 'php'];
  dataSource: SLPMetrics[] = [];
  earnings: EarningMetrics[] = [];
  conversion = 1;
  dateRange = new FormGroup({});

  constructor(
    private dialog: MatDialog,
    private fb: FormBuilder,
    private afs: AngularFirestore, 
    private service: ConversionService) {
    this.slpCollection = afs.collection<SLPMetrics>('slp');
    this.earningCollection = afs.collection<EarningMetrics>('earning');
    this.slpMetrics = this.slpCollection.valueChanges();
    this.earningMetrics = this.earningCollection.valueChanges();
  }

  ngOnInit(): void {
    this.dateRange = this.fb.group({
      'startDate': new Date(),
      'endDate': new Date(),
    });

    this.slpMetrics.subscribe(data => {
      data = data.sort((a, b) => {
        return b.date.seconds - a.date.seconds;
      })
      this.dataSource = data;
    });

    this.earningMetrics.subscribe(data => {
      this.earnings = data;
    });

    this.service.getSLPConversion().subscribe((data: any) => {
      this.conversion = data['smooth-love-potion'].php;
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(SlpDialogComponent, {
      width: '300px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (!this.dataSource.find(d => compareDates(d.date.toDate(), result.date))) {
          this.slpCollection.add(result);
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

  getTotalSlpWithdrawn(): number {
    return this.earnings.map(t => t.slp).reduce((acc, value) => acc + value, 0);
  }

  getTotalEarnings(): number {
    return (this.getTotalSlp() - this.getTotalSlpWithdrawn()) * this.conversion;
  }
}
