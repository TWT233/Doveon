import { Gear } from "@/mechanism/build/Gear";

export class Suit {
  [key: string]: Gear | Function;
  weapon: Gear = new Gear();
  hand: Gear = new Gear();
  body: Gear = new Gear();
  head: Gear = new Gear();

  constructor(
    weapon: Gear | null = null,
    hand: Gear | null = null,
    body: Gear | null = null,
    head: Gear | null = null
  ) {
    if (weapon) this.weapon.load(weapon);
    if (hand) this.hand.load(hand);
    if (body) this.body.load(body);
    if (head) this.head.load(head);
  }

  load(data: Suit) {
    this.weapon.load(data.weapon);
    this.hand.load(data.hand);
    this.body.load(data.body);
    this.head.load(data.head);
  }
}
