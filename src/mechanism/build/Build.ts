import { Gear } from "@/mechanism/build/Gear";
import { Status } from "@/mechanism/build/Status";
import { Attribute } from "@/mechanism/build/Attribute";
import { Pts } from "@/mechanism/build/Pts";

export class Build {
  private _gears: Gear[];
  private _pts: Pts;

  get status(): Status {
    let attr = new Attribute(0);

    for (const gearsKey in this._gears) {
      attr = attr.applyGears(this._gears[gearsKey]);
    }

    return {
      HP:
        (this._pts.VIT + this._pts.CON) *
          20 *
          (1 + this._pts.STR * 0.05) *
          (1 + attr.HP_A) +
        attr.HP_B,
      HP_REG_A: this._pts.STR / 100 / 100,
      HP_REG_B: attr.HP_REG_B,
      ATK_PHY: this._pts.STR * 10 * (1 + attr.ATK_PHY_A) + attr.ATK_PHY_B,
      ATK_MAG: this._pts.INT * 12 + attr.ATK_MAG_B,
      ATK_ABS: attr.ATK_ABS,
      ATK_SPD: this._pts.AGI * 3 * (1 + attr.ATK_SPD_A) + attr.ATK_SPD_B,
      THR_PHY_A: attr.THR_PHY_A,
      THR_PHY_B: attr.THR_PHY_B,
      THR_MAG_A: attr.THR_MAG_A,
      THR_MAG_B: attr.THR_MAG_B,
      SKI_CHA: this._pts.INT / (this._pts.INT + 99),
      CRI_CHA: this._pts.AGI / (this._pts.AGI + 99),
      THR_CRI: attr.THR_CRI_A,
      HP_STL: attr.HP_STL,
      DEF_PHY:
        (this._pts.VIT * 1.4 + this._pts.MEN * 0.1 + attr.DEF_PHY_B) /
        (this._pts.VIT * 1.4 + this._pts.MEN * 0.1 + attr.DEF_PHY_B + 99),
      DEF_MAG:
        (this._pts.CON * 1.4 + this._pts.MEN * 0.1 + attr.DEF_PHY_B) /
        (this._pts.CON * 1.4 + this._pts.MEN * 0.1 + attr.DEF_PHY_B + 99),
      BAR_PHY: attr.BAR_PHY,
      BAR_MAG: attr.BAR_MAG,
      SHD: this._pts.MEN * 40 * (1 + attr.SHD_A) + attr.SHD_B,
      SHD_REG_A: this._pts.INT / 80 / 100,
      SHD_REG_B: attr.SHD_REG_B,
      REF: attr.REF
    };
  }

  constructor(gears: Gear[] = new Array<Gear>(4), pts: Pts = new Pts()) {
    this._gears = gears;
    for (const i in [0, 1, 2, 3]) {
      this._gears[i] = new Gear();
    }
    this._pts = pts;
  }

  get gears(): Gear[] {
    return this._gears;
  }

  set gears(value: Gear[]) {
    this._gears = value;
  }

  get pts(): Pts {
    return this._pts;
  }

  set pts(value: Pts) {
    this._pts = value;
  }
}
