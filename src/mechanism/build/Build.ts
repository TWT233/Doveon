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

    return new Status().calSet(attr, this.pts);
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
