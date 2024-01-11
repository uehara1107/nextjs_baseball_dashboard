import { PLAYER_POS } from "./constants";

export interface PlayerData {
  pId: number;
  pos: (typeof PLAYER_POS)[number];
  name: string;
  birthday: Date;
  height: number;
  weight: number;
}

export interface BatterGameData {
  gId: number;
  pId: number;
  avg: number;
  hr: number;
  rbi: number;
  ops: number;
  gameDate: Date;
}

export interface BatterTotalData {
  pId: number;
  avg: number;
  hr: number;
  rbi: number;
  ops: number;
}
