import { Attribute } from "@/mechanism/build/Attribute";

export class Gear {
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
}

export type GearCateEntry = {
  name: string;
  type: string;
  handler: (a: Attribute, g: Gear) => Attribute;
};

export const GearCateList: GearCateEntry[] = [
  {
    name: "NONE",
    type: "none",
    handler: (a: Attribute) => {
      return a;
    }
  },
  {
    name: "SWORD",
    type: "weapon",
    handler: (a: Attribute, g: Gear): Attribute => {
      a.ATK_PHY_B += g.lvl * g.v(0) * 10;
      a.ATK_MAG_B += g.lvl * g.v(1) * 10;
      a.THR_PHY_B += (g.lvl * g.v(2) * 2) / 3;
      a.HP_STL += (g.lvl / 15 + 10) * g.v(3);
      return a;
    }
  },
  {
    name: "BOW",
    type: "weapon",
    handler: (a: Attribute, g: Gear): Attribute => {
      a.ATK_PHY_B += g.lvl * g.v(0) * 10;
      a.ATK_MAG_B += g.lvl * g.v(1) * 10;
      a.ATK_SPD_B += g.lvl * g.v(2) * 2;
      a.HP_STL += (g.lvl / 15 + 10) * g.v(3);
      return a;
    }
  },
  {
    name: "STAFF",
    type: "weapon",
    handler: (a: Attribute, g: Gear): Attribute => {
      a.ATK_PHY_B += g.lvl * g.v(0) * 10;
      a.ATK_MAG_B += g.lvl * g.v(1) * 10;
      a.THR_MAG_A += (g.lvl / 12 + 5) * g.v(2);
      a.HP_STL += (g.lvl / 15 + 10) * g.v(3);
      return a;
    }
  },
  {
    name: "BLADE",
    type: "weapon",
    handler: (a: Attribute, g: Gear): Attribute => {
      a.ATK_PHY_A += (g.lvl / 5 + 20) * g.v(0);
      a.ATK_SPD_A += (g.lvl / 5 + 20) * g.v(1);
      a.THR_CRI_A += (g.lvl / 15 + 10) * g.v(2);
      a.THR_PHY_A += (g.lvl / 12 + 10) * g.v(3);
      return a;
    }
  },
  {
    name: "PLATE",
    type: "body",
    handler: (a: Attribute, g: Gear): Attribute => {
      a.HP_B += g.lvl * g.v(0) * 5;
      a.DEF_PHY_B += g.lvl * g.v(1);
      a.DEF_MAG_B += g.lvl * g.v(2);
      a.HP_REG_B += g.lvl * g.v(3) * 2;
      return a;
    }
  },
  {
    name: "LEATHER",
    type: "body",
    handler: (a: Attribute, g: Gear): Attribute => {
      a.HP_B += g.lvl * g.v(0) * 10;
      a.BAR_PHY += g.lvl * g.v(1) * 2;
      a.BAR_MAG += g.lvl * g.v(2) * 2;
      a.HP_REG_B += g.lvl * g.v(3) * 2;
      return a;
    }
  },
  {
    name: "CLOTH",
    type: "body",
    handler: (a: Attribute, g: Gear): Attribute => {
      a.HP_B += g.lvl * g.v(0) * 10;
      a.BAR_PHY += g.lvl * g.v(1) * 2;
      a.BAR_MAG += g.lvl * g.v(2) * 2;
      a.HP_REG_B += g.lvl * g.v(3) * 2;
      return a;
    }
  },
  {
    name: "CLOAK",
    type: "body",
    handler: (a: Attribute, g: Gear): Attribute => {
      a.HP_B += g.lvl * g.v(0) * 10;
      a.SHD_REG_B += g.lvl * g.v(1) * 5;
      a.SHD_A += (g.lvl / 3 + 20) * g.v(2);
      a.SHD_B += g.lvl * g.v(3) * 2;
      return a;
    }
  },
  {
    name: "THORN",
    type: "body",
    handler: (a: Attribute, g: Gear): Attribute => {
      a.HP_A += (g.lvl / 5 + 20) * g.v(0);
      a.DEF_PHY_A += g.lvl * g.v(1);
      a.DEF_MAG_A += g.lvl * g.v(2);
      a.REF += (g.lvl / 15 + 10) * g.v(3);
      return a;
    }
  },
  {
    name: "GLOVE",
    type: "hand",
    handler: (a: Attribute, g: Gear): Attribute => {
      a.ATK_PHY_B += g.lvl * g.v(0) * 10;
      a.ATK_MAG_B += g.lvl * g.v(1) * 10;
      a.ATK_SPD_A += g.lvl * g.v(2) * 2;
      a.HP_B += g.lvl * g.v(3) * 5;
      return a;
    }
  },
  {
    name: "BRACELET",
    type: "hand",
    handler: (a: Attribute, g: Gear): Attribute => {
      a.ATK_MAG_A += (g.lvl / 5 + 1) * g.v(0);
      a.THR_MAG_A += (g.lvl / 12 + 1) * g.v(1);
      a.SHD_B += g.lvl * g.v(2) * 10;
      a.DEF_MAG_B += g.lvl * g.v(3);
      return a;
    }
  },
  {
    name: "SCARF",
    type: "head",
    handler: (a: Attribute, g: Gear): Attribute => {
      a.HP_B += g.lvl * g.v(0) * 5;
      a.BAR_PHY += g.lvl * g.v(1) * 2;
      a.BAR_MAG += g.lvl * g.v(2) * 2;
      a.HP_REG_B += g.lvl * g.v(3) * 2;
      return a;
    }
  }
];
