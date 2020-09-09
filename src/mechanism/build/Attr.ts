export class Attr {
  private _HP_A: number;
  private _HP_B: number;
  private _HP_REG_A: number;
  private _HP_REG_B: number;
  private _HP_STL: number;
  private _SHD_A: number;
  private _SHD_B: number;
  private _SHD_REG_A: number;
  private _SHD_REG_B: number;
  private _ATK_PHY_A: number;
  private _ATK_PHY_B: number;
  private _ATK_MAG_A: number;
  private _ATK_MAG_B: number;
  private _ATK_ABS: number;
  private _ATK_SPD_A: number;
  private _ATK_SPD_B: number;
  private _THR_PHY_A: number;
  private _THR_PHY_B: number;
  private _THR_MAG_A: number;
  private _THR_MAG_B: number;
  private _THR_CRI_A: number;
  private _SKI_CHA_A: number;
  private _CRI_CHA_A: number;
  private _DEF_PHY_A: number;
  private _DEF_PHY_B: number;
  private _DEF_MAG_A: number;
  private _DEF_MAG_B: number;
  private _BAR_PHY: number;
  private _BAR_MAG: number;
  private _REF: number;

  // constructor(val: number) {
  //
  // }

  constructor(val: number) {
    this._HP_A = val;
    this._HP_B = val;
    this._HP_REG_A = val;
    this._HP_REG_B = val;
    this._HP_STL = val;
    this._SHD_A = val;
    this._SHD_B = val;
    this._SHD_REG_A = val;
    this._SHD_REG_B = val;
    this._ATK_PHY_A = val;
    this._ATK_PHY_B = val;
    this._ATK_MAG_A = val;
    this._ATK_MAG_B = val;
    this._ATK_ABS = val;
    this._ATK_SPD_A = val;
    this._ATK_SPD_B = val;
    this._THR_PHY_A = val;
    this._THR_PHY_B = val;
    this._THR_MAG_A = val;
    this._THR_MAG_B = val;
    this._THR_CRI_A = val;
    this._SKI_CHA_A = val;
    this._CRI_CHA_A = val;
    this._DEF_PHY_A = val;
    this._DEF_PHY_B = val;
    this._DEF_MAG_A = val;
    this._DEF_MAG_B = val;
    this._BAR_PHY = val;
    this._BAR_MAG = val;
    this._REF = val;
  }

  get HP_A(): number {
    return this._HP_A;
  }

  set HP_A(value: number) {
    this._HP_A = value;
  }

  get HP_B(): number {
    return this._HP_B;
  }

  set HP_B(value: number) {
    this._HP_B = value;
  }

  get HP_REG_A(): number {
    return this._HP_REG_A;
  }

  set HP_REG_A(value: number) {
    this._HP_REG_A = value;
  }

  get HP_REG_B(): number {
    return this._HP_REG_B;
  }

  set HP_REG_B(value: number) {
    this._HP_REG_B = value;
  }

  get HP_STL(): number {
    return this._HP_STL;
  }

  set HP_STL(value: number) {
    this._HP_STL = value;
  }

  get SHD_A(): number {
    return this._SHD_A;
  }

  set SHD_A(value: number) {
    this._SHD_A = value;
  }

  get SHD_B(): number {
    return this._SHD_B;
  }

  set SHD_B(value: number) {
    this._SHD_B = value;
  }

  get SHD_REG_A(): number {
    return this._SHD_REG_A;
  }

  set SHD_REG_A(value: number) {
    this._SHD_REG_A = value;
  }

  get SHD_REG_B(): number {
    return this._SHD_REG_B;
  }

  set SHD_REG_B(value: number) {
    this._SHD_REG_B = value;
  }

  get ATK_PHY_A(): number {
    return this._ATK_PHY_A;
  }

  set ATK_PHY_A(value: number) {
    this._ATK_PHY_A = value;
  }

  get ATK_PHY_B(): number {
    return this._ATK_PHY_B;
  }

  set ATK_PHY_B(value: number) {
    this._ATK_PHY_B = value;
  }

  get ATK_MAG_A(): number {
    return this._ATK_MAG_A;
  }

  set ATK_MAG_A(value: number) {
    this._ATK_MAG_A = value;
  }

  get ATK_MAG_B(): number {
    return this._ATK_MAG_B;
  }

  set ATK_MAG_B(value: number) {
    this._ATK_MAG_B = value;
  }

  get ATK_ABS(): number {
    return this._ATK_ABS;
  }

  set ATK_ABS(value: number) {
    this._ATK_ABS = value;
  }

  get ATK_SPD_A(): number {
    return this._ATK_SPD_A;
  }

  set ATK_SPD_A(value: number) {
    this._ATK_SPD_A = value;
  }

  get ATK_SPD_B(): number {
    return this._ATK_SPD_B;
  }

  set ATK_SPD_B(value: number) {
    this._ATK_SPD_B = value;
  }

  get THR_PHY_A(): number {
    return this._THR_PHY_A;
  }

  set THR_PHY_A(value: number) {
    this._THR_PHY_A = value;
  }

  get THR_PHY_B(): number {
    return this._THR_PHY_B;
  }

  set THR_PHY_B(value: number) {
    this._THR_PHY_B = value;
  }

  get THR_MAG_A(): number {
    return this._THR_MAG_A;
  }

  set THR_MAG_A(value: number) {
    this._THR_MAG_A = value;
  }

  get THR_MAG_B(): number {
    return this._THR_MAG_B;
  }

  set THR_MAG_B(value: number) {
    this._THR_MAG_B = value;
  }

  get THR_CRI_A(): number {
    return this._THR_CRI_A;
  }

  set THR_CRI_A(value: number) {
    this._THR_CRI_A = value;
  }

  get SKI_CHA_A(): number {
    return this._SKI_CHA_A;
  }

  set SKI_CHA_A(value: number) {
    this._SKI_CHA_A = value;
  }

  get CRI_CHA_A(): number {
    return this._CRI_CHA_A;
  }

  set CRI_CHA_A(value: number) {
    this._CRI_CHA_A = value;
  }

  get DEF_PHY_A(): number {
    return this._DEF_PHY_A;
  }

  set DEF_PHY_A(value: number) {
    this._DEF_PHY_A = value;
  }

  get DEF_PHY_B(): number {
    return this._DEF_PHY_B;
  }

  set DEF_PHY_B(value: number) {
    this._DEF_PHY_B = value;
  }

  get DEF_MAG_A(): number {
    return this._DEF_MAG_A;
  }

  set DEF_MAG_A(value: number) {
    this._DEF_MAG_A = value;
  }

  get DEF_MAG_B(): number {
    return this._DEF_MAG_B;
  }

  set DEF_MAG_B(value: number) {
    this._DEF_MAG_B = value;
  }

  get BAR_PHY(): number {
    return this._BAR_PHY;
  }

  set BAR_PHY(value: number) {
    this._BAR_PHY = value;
  }

  get BAR_MAG(): number {
    return this._BAR_MAG;
  }

  set BAR_MAG(value: number) {
    this._BAR_MAG = value;
  }

  get REF(): number {
    return this._REF;
  }

  set REF(value: number) {
    this._REF = value;
  }
}
