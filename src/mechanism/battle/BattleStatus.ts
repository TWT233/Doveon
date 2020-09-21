import { Status } from "@/mechanism/build/Status";

export class BattleStatus {
  [key: string]: number;
  HP: number;
  HP_REG_P: number;
  HP_REG_C: number;
  ATK_PHY: number;
  ATK_MAG: number;
  ATK_ABS: number;
  ATK_SPD: number;
  THR_PHY_P: number;
  THR_PHY_C: number;
  THR_MAG_P: number;
  THR_MAG_C: number;
  SKI_CHA: number;
  CRI_CHA: number;
  THR_CRI: number;
  HP_STL_P: number;
  DEF_PHY: number;
  DEF_MAG: number;
  BAR_PHY: number;
  BAR_MAG: number;
  SHD: number;
  SHD_REG_P: number;
  SHD_REG_C: number;
  REF: number;

  constructor(s: Status) {
    this.HP = s.HP;
    this.HP_REG_P = s.HP_REG_A;
    this.HP_REG_C = s.HP_REG_B;
    this.ATK_PHY = s.ATK_PHY_A + s.ATK_PHY_B;
    this.ATK_MAG = s.ATK_MAG_A + s.ATK_MAG_B;
    this.ATK_ABS = s.ATK_ABS;
    this.ATK_SPD = s.ATK_SPD_A + s.ATK_SPD_B;
    this.THR_PHY_P = s.THR_PHY_A;
    this.THR_PHY_C = s.THR_PHY_B;
    this.THR_MAG_P = s.THR_MAG_A;
    this.THR_MAG_C = s.THR_MAG_B;
    this.SKI_CHA = s.SKI_CHA;
    this.CRI_CHA = s.CRI_CHA;
    this.THR_CRI = s.THR_CRI;
    this.HP_STL_P = s.HP_STL;
    this.DEF_PHY = s.DEF_PHY_A + s.DEF_PHY_B;
    this.DEF_MAG = s.DEF_MAG_A + s.DEF_MAG_B;
    this.BAR_PHY = s.BAR_PHY;
    this.BAR_MAG = s.BAR_MAG;
    this.SHD = s.SHD;
    this.SHD_REG_P = s.SHD_REG_A;
    this.SHD_REG_C = s.SHD_REG_B;
    this.REF = s.REF;
  }
}
