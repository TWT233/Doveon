import { Attr } from "@/mechanism/build/Attr";

export class Gear {
  private _name: string;
  private _lvl: number;
  private _p: number[];
  // private _isEnchanted: boolean;

  constructor(type: string, lvl: number, p: number[]) {
    this._name = type;
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
}

export type GearCateEntry = {
  name: string;
  type: string;
  handler: (a: Attr, g: Gear) => Attr;
};

export const GearCateList: GearCateEntry[] = [
  {
    name: "SWORD",
    type: "weapon",
    handler: (a: Attr, g: Gear): Attr => {
      a.ATK_PHY_B += g.lvl * g.p[0] * 10;
      a.ATK_MAG_B += g.lvl * g.p[1] * 10;
      a.THR_PHY_B += (g.lvl * g.p[2] * 2) / 3;
      a.HP_STL += (g.lvl / 15 + 10) * g.p[3];
      return a;
    }
  },
  {
    name: "PLATE",
    type: "body",
    handler: (a: Attr, g: Gear): Attr => {
      a.HP_B += g.lvl * g.p[0] * 5;
      a.DEF_PHY_B += g.lvl * g.p[1];
      a.DEF_MAG_B += g.lvl * g.p[2];
      a.HP_REG_B += g.lvl * g.p[3] * 2;
      return a;
    }
  },
  {
    name: "BRACELET",
    type: "hand",
    handler: (a: Attr, g: Gear): Attr => {
      a.ATK_MAG_A += (g.lvl / 5 + 1) * g.p[0];
      a.THR_MAG_A += (g.lvl / 12 + 1) * g.p[1];
      a.SHD_B += g.lvl * g.p[2] * 10;
      a.DEF_MAG_B += g.lvl * g.p[3];
      return a;
    }
  },
  {
    name: "SCARF",
    type: "head",
    handler: (a: Attr, g: Gear): Attr => {
      a.HP_B += g.lvl * g.p[0] * 5;
      a.BAR_PHY += g.lvl * g.p[1] * 2;
      a.BAR_MAG += g.lvl * g.p[2] * 2;
      a.HP_REG_B += g.lvl * g.p[3] * 2;
      return a;
    }
  }
];
