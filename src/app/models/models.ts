import { Timestamp } from '@firebase/firestore-types';

export interface MMRChart {
  bracket: string;
  reward: string;
}

export interface ArenaMetrics {
  id?: string;
  date: Timestamp;
  win: number;
  lose: number;
}

export interface SLPMetrics {
  id?: string;
  date: Timestamp;
  slp: number;
}

export interface EarningMetrics {
  date: Timestamp;
  slp: number;
  conversion: number;
}