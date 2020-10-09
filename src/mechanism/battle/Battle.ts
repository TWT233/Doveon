import { Mob } from "@/mechanism/battle/Mob";
import { Action } from "@/mechanism/battle/Action";

export class Battle {
  a: Mob;
  b: Mob;
  log: Array<Action> = new Array<Action>();

  constructor(a: Mob, b: Mob) {
    this.a = a;
    this.b = b;
  }
}
