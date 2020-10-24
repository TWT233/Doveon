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

  exec(): Action {
    const s = this.onSPDGetExec();

    this.onPassiveBefore();

    if (s == "a") {
      this.a.skills[0].run(this.after, s);
    } else if (s == "b") {
      this.b.skills[0].run(this.after, s);
    }

    this.onSPDRefresh();

    return this;
  }

  onSPDGetExec() {
    return this.after.e.spd >= 0 ? "a" : "b";
  }

  onPassiveBefore() {
    this.a.skills.forEach(e => {
      if (e.type == "passive" && e.isBefore) {
        e.run(this.after, "a");
      }
    });
    this.b.skills.forEach(e => {
      if (e.type == "passive" && e.isBefore) {
        e.run(this.after, "b");
      }
    });
  }

  onSPDRefresh() {
    this.onSPDGetExec() == "a"
      ? (this.after.e.spd -= this.after.b.ATK_SPD)
      : (this.after.e.spd += this.after.a.ATK_SPD);
  }
}
