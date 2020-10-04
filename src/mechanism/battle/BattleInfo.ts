export class BattleInfo {
  buff: {
    a: { name: string; val: number }[];
    b: { name: string; val: number }[];
  };
  spdCounter: {
    a: number;
    b: number;
  };

  constructor(buff = { a: [], b: [] }, spdCounter = { a: 0, b: 0 }) {
    this.buff = { ...buff };
    this.buff.a = buff.a.slice();
    this.buff.b = buff.b.slice();

    this.spdCounter = { ...spdCounter };
  }
}
