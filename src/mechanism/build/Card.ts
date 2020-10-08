export const CardList: string[] = ["MENG", "AI", "MO", "LIN"];

export class Card {
  [key: string]: string | number | Function;
  private _name: string;
  private _lvl: number;
  private _maxLvl: number;
  private _slotCount: number;

  load(value: Card): Card {
    if (value == null) return this;
    for (const key in value) {
      if (
        Object.prototype.hasOwnProperty.call(value, key) &&
        Object.prototype.hasOwnProperty.call(this, key)
      )
        this[key] = value[key];
    }
    return this;
  }

  toString(): string {
    return this.name + " " + this.lvl + " " + this.slotCount;
  }

  constructor(name = "", lvl = 0, maxLvl = 0, slotCount = 0) {
    this._name = name;
    this._lvl = lvl;
    this._maxLvl = maxLvl;
    this._slotCount = slotCount;
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

  get maxLvl(): number {
    return this._maxLvl;
  }

  set maxLvl(value: number) {
    this._maxLvl = value;
  }

  get slotCount(): number {
    return this._slotCount;
  }

  set slotCount(value: number) {
    this._slotCount = value;
  }
}
