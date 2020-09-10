export class Pts {
  private _STR: number; //力量
  private _AGI: number; //敏捷
  private _INT: number; //智力
  private _VIT: number; //体魄
  private _MEN: number; //精神
  private _CON: number; //意志

  constructor(STR = 1, AGI = 1, INT = 1, VIT = 1, MEN = 1, CON = 1) {
    this._STR = STR;
    this._AGI = AGI;
    this._INT = INT;
    this._VIT = VIT;
    this._MEN = MEN;
    this._CON = CON;
  }

  //力量
  get STR(): number {
    return this._STR;
  }

  set STR(value: number) {
    if (value < 1) return;
    this._STR = value;
  }

  //敏捷
  get AGI(): number {
    return this._AGI;
  }

  set AGI(value: number) {
    if (value < 1) return;
    this._AGI = value;
  }

  //智力
  get INT(): number {
    return this._INT;
  }

  set INT(value: number) {
    if (value < 1) return;
    this._INT = value;
  }

  //体魄
  get VIT(): number {
    return this._VIT;
  }

  set VIT(value: number) {
    if (value < 1) return;
    this._VIT = value;
  }

  //精神
  get MEN(): number {
    return this._MEN;
  }

  set MEN(value: number) {
    if (value < 1) return;
    this._MEN = value;
  }

  //意志
  get CON(): number {
    return this._CON;
  }

  set CON(value: number) {
    if (value < 1) return;
    this._CON = value;
  }
}
