export class Pts {
  [key: string]: number | Function;
  STR = 1; //力量
  AGI = 1; //敏捷
  INT = 1; //智力
  VIT = 1; //体魄
  MEN = 1; //精神
  CON = 1; //意志

  load(p: Pts) {
    if (p == null) return;
    for (const key in p) {
      this[key] = p[key];
    }
  }

  toString(): string {
    return (
      this.STR +
      " " +
      this.AGI +
      " " +
      this.INT +
      " " +
      this.VIT +
      " " +
      this.MEN +
      " " +
      this.CON
    );
  }
}
