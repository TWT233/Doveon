import { Attribute } from "@/mechanism/build/Attribute";

export class Gear {
  [key: string]: number | string | number[] | Function;
  private _name: string;
  private _lvl: number;
  private _p: number[]; //save in int percents, **div 100 when used**
  // private _isEnchanted: boolean;

  constructor(name = "NONE", lvl = 1, p: number[] = [100, 100, 100, 100]) {
    this._name = name;
    this._lvl = lvl;
    this._p = p.slice();
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get lvl(): number {
    return this._lvl;
  }

  set lvl(value: number) {
    this._lvl = value;
  }

  get p(): number[] {
    return this._p;
  }

  set p(value: number[]) {
    this._p = value;
  }

  // wrapper for _p, div 100 here
  v(pos: number): number {
    if (pos > this._p.length) throw Error("out of range");
    return this._p[pos] / 100;
  }

  load(g: Gear) {
    if (g == null) return;
    this._name = g._name;
    this._lvl = g._lvl;
    for (let i = 0; i < Math.min(this._p.length, g._p.length); ++i) {
      this._p[i] = g._p[i];
    }
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
