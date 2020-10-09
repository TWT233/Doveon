import { Status } from "@/mechanism/build/Status";
import _ from "lodash";

export type buff = {
  name: string;
  val: number;
};

export class DynStatus {
  [key: string]: number | Function | buff[];
  HP: number = 0;
  HP_REG_P: number = 0;
  HP_REG_C: number = 0;
  ATK_PHY: number = 0;
  ATK_MAG: number = 0;
  ATK_ABS: number = 0;
  ATK_SPD: number = 0;
  THR_PHY_P: number = 0;
  THR_PHY_C: number = 0;
  THR_MAG_P: number = 0;
  THR_MAG_C: number = 0;
  SKI_CHA: number = 0;
  CRI_CHA: number = 0;
  THR_CRI: number = 0;
  HP_STL_P: number = 0;
  DEF_PHY: number = 0;
  DEF_MAG: number = 0;
  BAR_PHY: number = 0;
  BAR_MAG: number = 0;
  SHD: number = 0;
  SHD_REG_P: number = 0;
  SHD_REG_C: number = 0;
  REF: number = 0;
  buffs: buff[] = [];

  constructor(status: Status | DynStatus | null = null) {
    if (status) this.load(status);
  }

  load(value: Status | DynStatus): DynStatus {
    if (value instanceof Status) {
      this.HP = value.HP;
      this.HP_REG_P = value.HP_REG_A;
      this.HP_REG_C = value.HP_REG_B;
      this.ATK_PHY = value.ATK_PHY_A + value.ATK_PHY_B;
      this.ATK_MAG = value.ATK_MAG_A + value.ATK_MAG_B;
      this.ATK_ABS = value.ATK_ABS;
      this.ATK_SPD = value.ATK_SPD_A + value.ATK_SPD_B;
      this.THR_PHY_P = value.THR_PHY_A;
      this.THR_PHY_C = value.THR_PHY_B;
      this.THR_MAG_P = value.THR_MAG_A;
      this.THR_MAG_C = value.THR_MAG_B;
      this.SKI_CHA = value.SKI_CHA;
      this.CRI_CHA = value.CRI_CHA;
      this.THR_CRI = value.THR_CRI;
      this.HP_STL_P = value.HP_STL;
      this.DEF_PHY = value.DEF_PHY_A + value.DEF_PHY_B;
      this.DEF_MAG = value.DEF_MAG_A + value.DEF_MAG_B;
      this.BAR_PHY = value.BAR_PHY;
      this.BAR_MAG = value.BAR_MAG;
      this.SHD = value.SHD;
      this.SHD_REG_P = value.SHD_REG_A;
      this.SHD_REG_C = value.SHD_REG_B;
      this.REF = value.REF;
    } else {
      for (const key in value) {
        if (
          Object.prototype.hasOwnProperty.call(value, key) &&
          Object.prototype.hasOwnProperty.call(this, key) &&
          typeof value[key] == "number"
        )
          this[key] = value[key];
      }
      if (value.buffs) {
        this.buffs.splice(0, this.buffs.length);
        _.cloneDeep(value.buffs).forEach(e => this.buffs.push(e));
      }
    }
    return this;
  }
}
