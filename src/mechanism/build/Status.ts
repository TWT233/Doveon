import { Attribute } from "@/mechanism/build/Attribute";

export class Status {
  private _HP: number;
  private _HP_REG: number;
  private _ATK_PHY: number;
  private _ATK_MAG: number;
  private _ATK_ABS: number;
  private _ATK_SPD: number;
  private _THR_PHY: number;
  private _THR_MAG: number;
  private _SKI_CHA: number;
  private _CRI_CHA: number;
  private _THR_CRI: number;
  private _HP_STL: number;
  private _DEF_PHY: number;
  private _DEF_MAG: number;
  private _BAR_PHY: number;
  private _BAR_MAG: number;
  private _SHD: number;
  private _SHD_REG: number;
  private _REF: number;

  applyAttr(attr: Attribute): Status {
    this.HP = attr.HP_A + attr.HP_B;
    this.HP_REG = attr.HP_REG_A + attr.HP_REG_B;
    this.ATK_PHY = attr.ATK_PHY_A + attr.ATK_PHY_B;
    this.ATK_MAG = attr.ATK_MAG_A + attr.ATK_PHY_B;
    this.ATK_ABS = attr.ATK_ABS;
    this.ATK_SPD = attr.ATK_SPD_A + attr.ATK_SPD_B;
    this.THR_PHY = attr.THR_PHY_A + attr.THR_PHY_B;
    this.THR_MAG = attr.THR_MAG_A + attr.THR_MAG_B;
    this.SKI_CHA = attr.SKI_CHA_A;
    this.CRI_CHA = attr.CRI_CHA_A;
    this.THR_CRI = attr.THR_CRI_A;
    this.HP_STL = attr.HP_STL;
    this.DEF_PHY = attr.DEF_PHY_A + attr.DEF_PHY_B;
    this.DEF_MAG = attr.DEF_MAG_A + attr.DEF_MAG_B;
    this.BAR_PHY = attr.BAR_PHY;
    this.BAR_MAG = attr.BAR_MAG;
    this.SHD = attr.SHD_A + attr.SHD_B;
    this.SHD_REG = attr.SHD_REG_A + attr.SHD_REG_B;
    this.REF = attr.REF;
    return this;
  }

  constructor(val: number) {
    this._HP = val;
    this._HP_REG = val;
    this._ATK_PHY = val;
    this._ATK_MAG = val;
    this._ATK_ABS = val;
    this._ATK_SPD = val;
    this._THR_PHY = val;
    this._THR_MAG = val;
    this._SKI_CHA = val;
    this._CRI_CHA = val;
    this._THR_CRI = val;
    this._HP_STL = val;
    this._DEF_PHY = val;
    this._DEF_MAG = val;
    this._BAR_PHY = val;
    this._BAR_MAG = val;
    this._SHD = val;
    this._SHD_REG = val;
    this._REF = val;
  }

  get HP(): number {
    return this._HP;
  }

  set HP(value: number) {
    this._HP = value;
  }

  get HP_REG(): number {
    return this._HP_REG;
  }

  set HP_REG(value: number) {
    this._HP_REG = value;
  }

  get ATK_PHY(): number {
    return this._ATK_PHY;
  }

  set ATK_PHY(value: number) {
    this._ATK_PHY = value;
  }

  get ATK_MAG(): number {
    return this._ATK_MAG;
  }

  set ATK_MAG(value: number) {
    this._ATK_MAG = value;
  }

  get ATK_ABS(): number {
    return this._ATK_ABS;
  }

  set ATK_ABS(value: number) {
    this._ATK_ABS = value;
  }

  get ATK_SPD(): number {
    return this._ATK_SPD;
  }

  set ATK_SPD(value: number) {
    this._ATK_SPD = value;
  }

  get THR_PHY(): number {
    return this._THR_PHY;
  }

  set THR_PHY(value: number) {
    this._THR_PHY = value;
  }

  get THR_MAG(): number {
    return this._THR_MAG;
  }

  set THR_MAG(value: number) {
    this._THR_MAG = value;
  }

  get SKI_CHA(): number {
    return this._SKI_CHA;
  }

  set SKI_CHA(value: number) {
    this._SKI_CHA = value;
  }

  get CRI_CHA(): number {
    return this._CRI_CHA;
  }

  set CRI_CHA(value: number) {
    this._CRI_CHA = value;
  }

  get THR_CRI(): number {
    return this._THR_CRI;
  }

  set THR_CRI(value: number) {
    this._THR_CRI = value;
  }

  get HP_STL(): number {
    return this._HP_STL;
  }

  set HP_STL(value: number) {
    this._HP_STL = value;
  }

  get DEF_PHY(): number {
    return this._DEF_PHY;
  }

  set DEF_PHY(value: number) {
    this._DEF_PHY = value;
  }

  get DEF_MAG(): number {
    return this._DEF_MAG;
  }

  set DEF_MAG(value: number) {
    this._DEF_MAG = value;
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

  get SHD(): number {
    return this._SHD;
  }

  set SHD(value: number) {
    this._SHD = value;
  }

  get SHD_REG(): number {
    return this._SHD_REG;
  }

  set SHD_REG(value: number) {
    this._SHD_REG = value;
  }

  get REF(): number {
    return this._REF;
  }

  set REF(value: number) {
    this._REF = value;
  }
}
