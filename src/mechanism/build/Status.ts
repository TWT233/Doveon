import { Attribute } from "@/mechanism/build/Attribute";
import { Pts } from "@/mechanism/build/Pts";

export class Status {
  [key: string]: number | Function | Status;
  HP = 0;
  HP_REG_P = 1;
  HP_REG_K = 0;
  HP_REG_C = 0;
  ATK_PHY_A = 0;
  ATK_PHY_B = 0;
  ATK_MAG_A = 0;
  ATK_MAG_B = 0;
  ATK_ABS = 0;
  ATK_SPD_A = 0;
  ATK_SPD_B = 0;
  THR_PHY_K = 0;
  THR_PHY_C = 0;
  THR_MAG_K = 0;
  THR_MAG_C = 0;
  SKI_CHA_A = 0;
  CRI_CHA_A = 0;
  THR_CRI = 0;
  STL = 0;
  DEF_PHY_A = 0;
  DEF_PHY_B = 0;
  DEF_MAG_A = 0;
  DEF_MAG_B = 0;
  BAR_PHY = 0;
  BAR_MAG = 0;
  SHD = 0;
  SHD_REG_P = 1;
  SHD_REG_K = 0;
  SHD_REG_C = 0;
  REF = 0;
  origin: Status;

  constructor(value: Status | null = null) {
    if (value) {
      this.load(value);
      this.origin = value.origin;
    } else this.origin = this;
  }

  load(value: Status): Status {
    for (const key in value) {
      if (
        Object.prototype.hasOwnProperty.call(value, key) &&
        Object.prototype.hasOwnProperty.call(this, key) &&
        typeof value[key] == "number"
      )
        this[key] = value[key];
    }
    this.origin = value.origin;
    return this;
  }

  calSet(a: Attribute, p: Pts): Status {
    this.HP =
      (p.VIT + p.CON) * 20 * (1 + p.STR * 0.005) * (1 + a.HP_A / 100) + a.HP_B;
    this.HP_REG_K = p.STR / 100;
    this.HP_REG_C = a.HP_REG_B;
    this.ATK_PHY_A = p.STR * 10 * (1 + a.ATK_PHY_A / 100);
    this.ATK_PHY_B = a.ATK_PHY_B;
    this.ATK_MAG_A = p.INT * 12 * (1 + a.ATK_MAG_A / 100);
    this.ATK_MAG_B = a.ATK_MAG_B;
    this.ATK_ABS = a.ATK_ABS;
    this.ATK_SPD_A = p.AGI * 3 * (1 + a.ATK_SPD_A / 100);
    this.ATK_SPD_B = a.ATK_SPD_B;
    this.THR_PHY_K = a.THR_PHY_A;
    this.THR_PHY_C = a.THR_PHY_B;
    this.THR_MAG_K = a.THR_MAG_A;
    this.THR_MAG_C = a.THR_MAG_B;
    this.SKI_CHA_A = p.INT;
    this.CRI_CHA_A = p.AGI;
    this.THR_CRI = a.THR_CRI_A;
    this.STL = a.HP_STL;
    this.DEF_PHY_A = p.VIT * 1.4 + p.MEN * 0.1;
    this.DEF_PHY_B = a.DEF_PHY_B;
    this.DEF_MAG_A = p.CON * 1.4 + p.MEN * 0.1;
    this.DEF_MAG_B = a.DEF_MAG_B;
    this.BAR_PHY = a.BAR_PHY;
    this.BAR_MAG = a.BAR_MAG;
    this.SHD = p.MEN * 40 * (1 + a.SHD_A / 100) + a.SHD_B;
    this.SHD_REG_K = p.INT / 80;
    this.SHD_REG_C = a.SHD_REG_B;
    this.REF = a.REF;
    return this;
  }

  get ATK_PHY(): number {
    return this.ATK_PHY_A + this.ATK_PHY_B;
  }
  set ATK_PHY(value) {
    this.ATK_PHY_B = Math.max(0, value - this.ATK_PHY_A);
    this.ATK_PHY_A = Math.min(value, this.ATK_PHY_A);
  }

  get ATK_MAG(): number {
    return this.ATK_MAG_A + this.ATK_MAG_B;
  }
  set ATK_MAG(value) {
    this.ATK_MAG_B = Math.max(0, value - this.ATK_MAG_A);
    this.ATK_MAG_A = Math.min(value, this.ATK_MAG_A);
  }

  get ATK_SPD(): number {
    return this.ATK_SPD_A + this.ATK_SPD_B;
  }
  set ATK_SPD(value) {
    this.ATK_SPD_B = Math.max(0, value - this.ATK_SPD_A);
    this.ATK_SPD_A = Math.min(value, this.ATK_SPD_A);
  }

  get DEF_PHY(): number {
    return this.DEF_PHY_A + this.DEF_PHY_B;
  }
  set DEF_PHY(value) {
    this.DEF_PHY_B = Math.max(0, value - this.DEF_PHY_A);
    this.DEF_PHY_A = Math.min(value, this.DEF_PHY_A);
  }

  get SKI_CHA(): number {
    return this.SKI_CHA_A / (this.SKI_CHA_A + 99);
  }

  get CRI_CHA(): number {
    return this.CRI_CHA_A / (this.CRI_CHA_A + 99);
  }

  get DEF_MAG(): number {
    return this.DEF_MAG_A + this.DEF_MAG_B;
  }
  set DEF_MAG(value) {
    this.DEF_MAG_B = Math.max(0, value - this.DEF_MAG_A);
    this.DEF_MAG_A = Math.min(value, this.DEF_MAG_A);
  }
}
