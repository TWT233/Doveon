export class Pts {
  [key: string]: number | Function;
  STR = 1; //力量
  AGI = 1; //敏捷
  INT = 1; //智力
  VIT = 1; //体魄
  MEN = 1; //精神
  CON = 1; //意志

  load(value: Pts): Pts {
    if (value == null) return this;
    for (const key in value) {
      if (
        Object.prototype.hasOwnProperty.call(value, key) &&
        Object.prototype.hasOwnProperty.call(this, key)
      )
        this[key] = value[key];
    }
    return this;
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
