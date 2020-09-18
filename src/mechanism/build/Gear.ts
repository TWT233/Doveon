import { Attribute } from "@/mechanism/build/Attribute";

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

  load(g: Gear) {
    if (g == null) return;
    this.name = g.name;
    this.lvl = g.lvl;
    for (let i = 0; i < Math.min(this.p.length, g.p.length); ++i) {
      this.p[i] = g.p[i];
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

export type GearCateEntry = {
  name: string;
  type: string;
  handler: (a: Attribute, g: Gear) => Attribute;
};

export type ArsenalEntry = {
  label: string;
  markColor: string;
  gear: Gear;
};
