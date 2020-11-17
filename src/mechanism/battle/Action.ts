import { Mob } from "@/mechanism/battle/Mob";
import { BattleFrame } from "@/mechanism/battle/BattleFrame";
import { ATK } from "@/utils/helper";

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
    const s = this.getExec();

    this.execBeforeCrit(s);
    this.diceCriAndSki(s);
    this.execActive(s);
    this.diceMagCri(s);

    this.beforeATK(s);
    ATK(this.after, s);
    this.afterATK(s);

    this.RFL(s);
    this.refreshSPD();
    return this;
  }

  getExec() {
    return this.after.e.spd >= 0 ? "a" : "b";
  }

  execBeforeCrit(s: "a" | "b") {
    this[s].skills.forEach(e => {
      if (e.type == "beforeCrit") {
        e.run(this.after, "a");
      }
    });
  }

  diceCriAndSki(s: "a" | "b") {
    this.after.e.isCri = Math.random() < this[s].status.CRI_CHA;
    this.after.e.isSki = Math.random() < this[s].status.SKI_CHA;
  }

  execActive(s: "a" | "b") {
    this[s].skills.forEach(e => {
      if (e.type == "active") {
        e.run(this.after, "a");
      }
    });
  }

  diceMagCri(s: "a" | "b") {
    this.after.e.isMC = Math.random() < 0.2;
    this[s].skills.forEach(e => {
      if (e.type == "onMC") {
        e.run(this.after, "a");
      }
    });
  }

  beforeATK(s: "a" | "b") {
    this[s].skills.forEach(e => {
      if (e.type == "onMC") {
        e.run(this.after, "a");
      }
    });
  }

  afterATK(s: "a" | "b") {
    this[s].skills.forEach(e => {
      if (e.type == "afterATK") {
        e.run(this.after, "a");
      }
    });
  }

  RFL(s: "a" | "b") {
    console.log("RFL not implemented");
  }

  refreshSPD() {
    this.getExec() == "a"
      ? (this.after.e.spd -= this.after.b.ATK_SPD)
      : (this.after.e.spd += this.after.a.ATK_SPD);
  }
}
