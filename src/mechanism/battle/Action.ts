import { Mob } from "@/mechanism/battle/Mob";
import { BattleFrame } from "@/mechanism/battle/BattleFrame";

export class Action {
  a: Mob;
  b: Mob;
  before: BattleFrame;
  after: BattleFrame;

  constructor(a: Mob, b: Mob, before: BattleFrame) {
    this.a = a;
    this.b = b;
    this.before = before;
    this.after = new BattleFrame(this.before);
  }
}
