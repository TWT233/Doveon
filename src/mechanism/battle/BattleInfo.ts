export class BattleInfo {
  buff: {
    a: { name: string; val: number }[];
    b: { name: string; val: number }[];
  };
  spdCounter: {
    a: number;
    b: number;
  };

  constructor(buff: { a: []; b: [] }, spdCounter: { a: number; b: number }) {
    this.buff = { ...buff };
    this.buff.a = buff.a.slice();
    this.buff.b = buff.b.slice();

    this.spdCounter = { ...spdCounter };
  }
}
