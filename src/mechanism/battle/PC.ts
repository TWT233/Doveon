import { Card } from "@/mechanism/build/Card";
import { Aura } from "@/mechanism/build/Aura";
import { Status } from "@/mechanism/build/Status";

export class PC {
  card = new Card();
  aura = new Aura();
  status: Status;

  constructor(card: Card, aura: Aura, status: Status) {
    this.card.load(card);
    this.aura = aura;
    this.status = status;
  }
}
