import { Status } from "@/mechanism/build/Status";
import { Attribute } from "@/mechanism/build/Attribute";
import { Pts } from "@/mechanism/build/Pts";
import { Aura } from "@/mechanism/build/Aura";
import { Card } from "@/mechanism/build/Card";
import { Suit } from "@/mechanism/build/Suit";

export class Build {
  [key: string]: Suit | Pts | Aura | Card | Status | Function;
  private _suit: Suit = new Suit();
  private _pts: Pts = new Pts();
  private _aura: Aura = new Aura();
  private _card: Card = new Card();

  load(b: Build) {
    if (b == null) return;
    this._suit.load(b._suit);
    this._pts.load(b._pts);
    this._aura.load(b._aura);
    this._card.load(b._card);
  }

  get status(): Status {
    let attr = new Attribute(0);

    attr = attr.applyGears(this._suit.weapon);
    attr = attr.applyGears(this._suit.hand);
    attr = attr.applyGears(this._suit.body);
    attr = attr.applyGears(this._suit.head);

    // TODO: ADD AURA

    return {
      HP:
        (this._pts.VIT + this._pts.CON) *
          20 *
          (1 + this._pts.STR * 0.005) *
          (1 + attr.HP_A / 100) +
        attr.HP_B,
      HP_REG_A: this._pts.STR / 100,
      HP_REG_B: attr.HP_REG_B,
      ATK_PHY_A: this._pts.STR * 10 * (1 + attr.ATK_PHY_A / 100),
      ATK_PHY_B: attr.ATK_PHY_B,
      ATK_MAG_A: this._pts.INT * 12 * (1 + attr.ATK_MAG_A / 100),
      ATK_MAG_B: attr.ATK_MAG_B,
      ATK_ABS: attr.ATK_ABS,
      ATK_SPD_A: this._pts.AGI * 3 * (1 + attr.ATK_SPD_A / 100),
      ATK_SPD_B: attr.ATK_SPD_B,
      THR_PHY_A: attr.THR_PHY_A,
      THR_PHY_B: attr.THR_PHY_B,
      THR_MAG_A: attr.THR_MAG_A,
      THR_MAG_B: attr.THR_MAG_B,
      SKI_CHA: this._pts.INT,
      CRI_CHA: this._pts.AGI,
      THR_CRI: attr.THR_CRI_A,
      HP_STL: attr.HP_STL,
      DEF_PHY_A: this._pts.VIT * 1.4 + this._pts.MEN * 0.1,
      DEF_PHY_B: attr.DEF_PHY_B,
      DEF_MAG_A: this._pts.CON * 1.4 + this._pts.MEN * 0.1,
      DEF_MAG_B: attr.DEF_MAG_B,
      BAR_PHY: attr.BAR_PHY,
      BAR_MAG: attr.BAR_MAG,
      SHD: this._pts.MEN * 40 * (1 + attr.SHD_A / 100) + attr.SHD_B,
      SHD_REG_A: this._pts.INT / 80,
      SHD_REG_B: attr.SHD_REG_B,
      REF: attr.REF
    };
  }

  constructor(
    suit: Suit | null = null,
    pts: Pts | null = null,
    aura: Aura | null = null,
    card: Card | null = null
  ) {
    if (suit) this._suit.load(suit);
    if (pts) this._pts.load(pts);
    if (aura) this._aura.load(aura);
    if (card) this._card.load(card);
  }

  get suit(): Suit {
    return this._suit;
  }

  set suit(value: Suit) {
    this._suit.load(value);
  }

  get pts(): Pts {
    return this._pts;
  }

  set pts(value: Pts) {
    this._pts.load(value);
  }

  get aura(): Aura {
    return this._aura;
  }

  set aura(value: Aura) {
    this._aura.load(value);
  }

  get card(): Card {
    return this._card;
  }

  set card(value: Card) {
    this._card.load(value);
  }
}
