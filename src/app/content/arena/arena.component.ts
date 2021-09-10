import { Component, OnInit } from '@angular/core';
import { ArenaMetrics } from '../../models/models';

const DATA: ArenaMetrics[] = [
  { date: 'September 3, 2021', win: 9, lose: 3 },
  { date: 'September 4, 2021', win: 8, lose: 6 },
  { date: 'September 5, 2021', win: 6, lose: 9 },
  { date: 'September 6, 2021', win: 8, lose: 6 },
  { date: 'September 7, 2021', win: 4, lose: 11 },
  { date: 'September 8, 2021', win: 8, lose: 7 },
  { date: 'September 9, 2021', win: 10, lose: 6 },
];

@Component({
  selector: 'app-arena',
  templateUrl: './arena.component.html',
  styleUrls: ['./arena.component.scss']
})
export class ArenaComponent implements OnInit {
  displayedColumns: string[] = ['date', 'win', 'lose', 'winRate'];
  dataSource = DATA;
  season = '18';

  constructor() { }

  ngOnInit(): void {
  }

}
