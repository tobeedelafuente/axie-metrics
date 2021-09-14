import { Timestamp } from '@firebase/firestore-types';

export interface MMRChart {
  bracket: string;
  reward: string;
}

export interface ArenaMetrics {
  date: Timestamp;
  win: number;
  lose: number;
}

export interface SLPMetrics {
  date: Timestamp;
  slp: number;
}