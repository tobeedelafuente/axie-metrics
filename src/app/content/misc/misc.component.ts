import { Component, OnInit } from '@angular/core';
import { MMRChart } from '../../models/models';

const DATA: MMRChart[] = [
  { bracket: '800 - 950', reward: '1 SLP' },
  { bracket: '950 – 1150', reward: '3-4 SLP' },
  { bracket: '1150 – 1350', reward: '6 SLP' },
  { bracket: '1350 – 1450', reward: '9 SLP' },
  { bracket: '1450 – 1550', reward: '12 SLP' },
  { bracket: '1550 – 1650', reward: '15 SLP' },
  { bracket: '1650 – 1750', reward: '18 SLP' },
  { bracket: '1750+', reward: '20 SLP' },
];

@Component({
  selector: 'app-misc',
  templateUrl: './misc.component.html',
  styleUrls: ['./misc.component.scss']
})
export class MiscComponent implements OnInit {
  displayedColumns: string[] = ['bracket', 'reward'];
  dataSource = DATA;
  season = '18';

  constructor() { }

  ngOnInit(): void {
  }

}
