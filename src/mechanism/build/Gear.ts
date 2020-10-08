export class Gear {
  [key: string]: number | string | boolean | number[] | Function;
  name: string;
  lvl: number;
  p: number[]; //save in int percents, **div 100 when used**
  isEnchanted: boolean;

  constructor(
    name = "NONE",
    lvl = 1,
    p: number[] = [100, 100, 100, 100],
    isEnchanted = false
  ) {
    this.name = name;
    this.lvl = lvl;
    this.p = p.slice();
    this.isEnchanted = isEnchanted;
  }

  // wrapper for p, div 100 here
  v(pos: number): number {
    if (pos > this.p.length) throw Error("out of range");
    return this.p[pos] / 100;
  }

  load(value: Gear) {
    if (value == null) return;
    this.name = value.name;
    this.lvl = value.lvl;
    this.isEnchanted = value.isEnchanted;
    for (let i = 0; i < Math.min(this.p.length, value.p.length); ++i) {
      this.p[i] = value.p[i];
    }
  }

  toString(): string {
    return (
      this.name +
      " " +
      this.lvl +
      " " +
      this.p[0] +
      " " +
      this.p[1] +
      " " +
      this.p[2] +
      " " +
      this.p[3] +
      " " +
      (this.isEnchanted ? "1" : "0")
    );
  }
}
