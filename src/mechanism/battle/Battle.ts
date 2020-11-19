import { Mob } from "@/mechanism/battle/Mob";
import { Action } from "@/mechanism/battle/Action";
import { BattleStatus } from "@/mechanism/battle/BattleStatus";
import { BattleFrame } from "@/mechanism/battle/BattleFrame";

export class Battle {
  a: Mob;
  b: Mob;
  e: BattleStatus;
  log: Array<Action> = new Array<Action>();

  constructor(a: Mob, b: Mob, e: BattleStatus) {
    this.a = a;
    this.b = b;
    this.e = e;
  }

  run(n = 100) {
    this.log.splice(0, this.log.length);
    for (; !this.isEnd() && n > 0; n--) {
      this.stepOver();
    }
  }

  stepOver(): Battle {
    let bf: BattleFrame;
    if (this.log.length == 0) {
      bf = BattleFrame.init(this.a.status, this.b.status, this.e);
      this.a.skills.forEach(e => {
        if (e.type == "stat") e.run(bf, "a");
      });
      this.b.skills.forEach(e => {
        if (e.type == "stat") e.run(bf, "b");
      });
    } else {
      bf = this.log[this.log.length - 1].after;
    }
    this.log.push(new Action(this.a, this.b, bf).exec());

    return this;
  }

  isEnd(): boolean {
    return (
      this.log.length > 0 &&
      (this.log[this.log.length - 1].after.a.HP <= 0 ||
        this.log[this.log.length - 1].after.b.HP <= 0 ||
        this.log.length >= 100)
    );
  }
}
