export class Status {
  [key: string]: number;
  HP: number;
  HP_REG_A: number;
  HP_REG_B: number;
  ATK_PHY_A: number;
  ATK_PHY_B: number;
  ATK_MAG_A: number;
  ATK_MAG_B: number;
  ATK_ABS: number;
  ATK_SPD_A: number;
  ATK_SPD_B: number;
  THR_PHY_A: number;
  THR_PHY_B: number;
  THR_MAG_A: number;
  THR_MAG_B: number;
  SKI_CHA: number;
  CRI_CHA: number;
  THR_CRI: number;
  HP_STL: number;
  DEF_PHY_A: number;
  DEF_PHY_B: number;
  DEF_MAG_A: number;
  DEF_MAG_B: number;
  BAR_PHY: number;
  BAR_MAG: number;
  SHD: number;
  SHD_REG_A: number;
  SHD_REG_B: number;
  REF: number;

  constructor(
    HP = 0,
    HP_REG_A = 0,
    HP_REG_B = 0,
    ATK_PHY_A = 0,
    ATK_PHY_B = 0,
    ATK_MAG_A = 0,
    ATK_MAG_B = 0,
    ATK_ABS = 0,
    ATK_SPD_A = 0,
    ATK_SPD_B = 0,
    THR_PHY_A = 0,
    THR_PHY_B = 0,
    THR_MAG_A = 0,
    THR_MAG_B = 0,
    SKI_CHA = 0,
    CRI_CHA = 0,
    THR_CRI = 0,
    HP_STL = 0,
    DEF_PHY_A = 0,
    DEF_PHY_B = 0,
    DEF_MAG_A = 0,
    DEF_MAG_B = 0,
    BAR_PHY = 0,
    BAR_MAG = 0,
    SHD = 0,
    SHD_REG_A = 0,
    SHD_REG_B = 0,
    REF = 0
  ) {
    this.HP = HP;
    this.HP_REG_A = HP_REG_A;
    this.HP_REG_B = HP_REG_B;
    this.ATK_PHY_A = ATK_PHY_A;
    this.ATK_PHY_B = ATK_PHY_B;
    this.ATK_MAG_A = ATK_MAG_A;
    this.ATK_MAG_B = ATK_MAG_B;
    this.ATK_ABS = ATK_ABS;
    this.ATK_SPD_A = ATK_SPD_A;
    this.ATK_SPD_B = ATK_SPD_B;
    this.THR_PHY_A = THR_PHY_A;
    this.THR_PHY_B = THR_PHY_B;
    this.THR_MAG_A = THR_MAG_A;
    this.THR_MAG_B = THR_MAG_B;
    this.SKI_CHA = SKI_CHA;
    this.CRI_CHA = CRI_CHA;
    this.THR_CRI = THR_CRI;
    this.HP_STL = HP_STL;
    this.DEF_PHY_A = DEF_PHY_A;
    this.DEF_PHY_B = DEF_PHY_B;
    this.DEF_MAG_A = DEF_MAG_A;
    this.DEF_MAG_B = DEF_MAG_B;
    this.BAR_PHY = BAR_PHY;
    this.BAR_MAG = BAR_MAG;
    this.SHD = SHD;
    this.SHD_REG_A = SHD_REG_A;
    this.SHD_REG_B = SHD_REG_B;
    this.REF = REF;
  }
}
