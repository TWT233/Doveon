import { Gear } from "@/mechanism/build/Gear";

export class Suit {
  [key: string]: Gear | Function;
  private _weapon: Gear = new Gear();
  private _hand: Gear = new Gear();
  private _body: Gear = new Gear();
  private _head: Gear = new Gear();

  constructor(
    weapon: Gear | null = null,
    hand: Gear | null = null,
    body: Gear | null = null,
    head: Gear | null = null
  ) {
    if (weapon) this.weapon = weapon;
    if (hand) this.hand = hand;
    if (body) this.body = body;
    if (head) this.head = head;
  }

  load(data: Suit) {
    this.weapon = data.weapon;
    this.hand = data.hand;
    this.body = data.body;
    this.head = data.head;
  }

  get weapon(): Gear {
    return this._weapon;
  }

  set weapon(value: Gear) {
    this._weapon.load(value);
  }

  get hand(): Gear {
    return this._hand;
  }

  set hand(value: Gear) {
    this._hand.load(value);
  }

  get body(): Gear {
    return this._body;
  }

  set body(value: Gear) {
    this._body.load(value);
  }

  get head(): Gear {
    return this._head;
  }

  set head(value: Gear) {
    this._head.load(value);
  }
}
