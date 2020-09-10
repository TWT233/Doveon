import { Attribute } from "@/mechanism/build/Attribute";
import { Gear, GearCateEntry } from "@/mechanism/build/Gear";

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
      a.THR_PHY_B += g.lvl * g.v(2);
      a.HP_STL += (g.lvl / 15 + 10) * g.v(3);
      return a;
    }
  },
  {
    name: "SHORT_BOW",
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
      a.THR_MAG_A += (g.lvl / 20 + 5) * g.v(2);
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
      a.THR_CRI_A += (g.lvl / 20 + 10) * g.v(2);
      a.THR_PHY_A += (g.lvl / 20 + 10) * g.v(3);
      return a;
    }
  },
  {
    name: "ASS_BOW",
    type: "weapon",
    handler: (a: Attribute, g: Gear): Attribute => {
      a.ATK_PHY_A += (g.lvl / 5 + 30) * g.v(0);
      a.THR_CRI_A += (g.lvl / 20 + 10) * g.v(1);
      a.THR_PHY_A += (g.lvl / 20 + 10) * g.v(2);
      a.THR_PHY_B += g.lvl * g.v(3);
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
      a.THR_MAG_A += (g.lvl / 20 + 1) * g.v(1);
      a.SHD_B += g.lvl * g.v(2) * 13;
      a.DEF_MAG_B += g.lvl * g.v(3);
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
    name: "SCARF",
    type: "head",
    handler: (a: Attribute, g: Gear): Attribute => {
      a.HP_B += g.lvl * g.v(0) * 5;
      a.BAR_PHY += g.lvl * g.v(1) * 2;
      a.BAR_MAG += g.lvl * g.v(2) * 2;
      a.HP_REG_B += g.lvl * g.v(3) * 2;
      return a;
    }
  },
  {
    name: "ASTRO",
    type: "head",
    handler: (a: Attribute, g: Gear): Attribute => {
      a.HP_B += g.lvl * g.v(0) * 5;
      a.SHD_A += (g.lvl / 3 + 1) * g.v(1);
      a.SHD_B += g.lvl * g.v(2) * 10;
      a.BAR_PHY += g.lvl * g.v(3) * 2;
      return a;
    }
  }
];