import { Component, OnInit } from '@angular/core';
import { MMRChart } from '../../models/models';

const DATA: MMRChart[] = [
  { bracket: '0 – 799', reward: '0 SLP' },
  { bracket: '800 – 999', reward: '1 SLP' },
  { bracket: '1000 – 1099', reward: '3 SLP' },
  { bracket: '1100 – 1299', reward: '6 SLP' },
  { bracket: '1300 – 1499', reward: '9 SLP' },
  { bracket: '1500 – 1799', reward: '12 SLP' },
  { bracket: '1800 – 1999', reward: '15 SLP' },
  { bracket: '2000 – 2199', reward: '18 SLP' },
  { bracket: '2200 – 6999', reward: '21 SLP' },
];

@Component({
  selector: 'app-misc',
  templateUrl: './misc.component.html',
  styleUrls: ['./misc.component.scss']
})
export class MiscComponent implements OnInit {
  displayedColumns: string[] = ['bracket', 'reward'];
  dataSource = DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
