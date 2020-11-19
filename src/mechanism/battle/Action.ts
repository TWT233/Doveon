import { Mob } from "@/mechanism/battle/Mob";
import { BattleFrame } from "@/mechanism/battle/BattleFrame";
import { dealDMG } from "@/utils/helper";

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

    this.after.e[s].PA = this[s].status.ATK_PHY;
    this.after.e[s].MA = this[s].status.ATK_MAG;
    this.after.e[s].AA = this[s].status.ATK_ABS;

    this.execBeforeCrit(s);
    this.diceCriAndSki(s);
    this.execActive(s);
    this.diceMagCri(s);

    this.beforeATK(s);
    dealDMG(this.after, s, "MAG", this.after.e[s].MA);
    dealDMG(this.after, s, "PHY", this.after.e[s].PA);
    dealDMG(this.after, s, "ABS", this.after.e[s].AA);
    this.afterATK(s);

    this.RFL(s);
    this.calREGAndDMG();
    if (this.after.a.HP <= 0 || this.after.b.HP <= 0) return this;
    this.roundREG();
    this.refreshSPD();
    return this;
  }

  getExec() {
    let s: "a" | "b" = this.after.e.spd.a >= this.after.e.spd.b ? "a" : "b";
    this.after.e.spd[s] -= this.after.e.spd[s == "a" ? "b" : "a"];
    this.after.e.spd[s == "a" ? "b" : "a"] = 0;
    if (this.after.e.AURA_REN == 3 && this.after.e.b.buffs.AURA_REN) {
      s = "b";
      this.after.e.spd[s] = 0;
    }
    if (this.after.e.AURA_REN == -3 && this.after.e.a.buffs.AURA_REN) {
      s = "a";
      this.after.e.spd[s] = 0;
    }

    if (s == "a") {
      if (this.after.e.AURA_REN >= 0) {
        this.after.e.AURA_REN++;
      } else {
        this.after.e.AURA_REN = 1;
        this.after.e.roundFlag = true;
      }
    } else {
      if (this.after.e.AURA_REN >= 0) {
        this.after.e.AURA_REN--;
      } else {
        this.after.e.AURA_REN = -1;
        this.after.e.roundFlag = true;
      }
    }
    this.after.e.s = s;
    return s;
  }

  execBeforeCrit(s: "a" | "b") {
    this[s].skills.forEach(e => {
      if (e.type == "beforeCrit") e.run(this.after, s);
    });
  }

  diceCriAndSki(s: "a" | "b") {
    if (!this.after.e.userSet) {
      this.after.e.isCri = Math.random() < this[s].status.CRI_CHA;
      this.after.e.isSki = Math.random() < this[s].status.SKI_CHA;
    }
    if (this.after.e.isCri) {
      this.after.e[s].PA *= 2;
      this.after.e[s].MA *= 1.5;
      this.after.e[s].AA *= 2;
    }
    this[s].skills.forEach(e => {
      if (e.type == "onCrit") e.run(this.after, s);
    });
  }

  execActive(s: "a" | "b") {
    this[s].skills.forEach(e => {
      if (e.type == "active") e.run(this.after, s);
    });
  }

  diceMagCri(s: "a" | "b") {
    if (!this.after.e.userSet) {
      this.after.e.isMC = Math.random() < 0.2;
    }
    this[s].skills.forEach(e => {
      if (e.type == "onMC") e.run(this.after, s);
    });
  }

  beforeATK(s: "a" | "b") {
    this[s].skills.forEach(e => {
      if (e.type == "beforeATK") e.run(this.after, s);
    });
  }

  afterATK(s: "a" | "b") {
    this.after.e.RFL +=
      (this[s == "a" ? "b" : "a"].status.REF / 100) *
      (this.after.e[s].PA + this.after.e[s].MA * 0.7 + this.after.e[s].AA);

    this[s].skills.forEach(e => {
      if (e.type == "afterATK") e.run(this.after, s);
    });
  }

  RFL(s: "a" | "b") {
    const m = s == "a" ? "b" : "a";
    this.after.e[m].MA += this.after.e.RFL;
    dealDMG(this.after, m, "MAG", this.after.e.RFL);
  }

  calREGAndDMG() {
    const A = this.after.a;
    const B = this.after.b;
    const E = this.after.e;
    E.a.HR *= A.HP_REG_P;
    E.a.SR *= A.SHD_REG_P;
    E.b.HR *= B.HP_REG_P;
    E.b.HR *= B.SHD_REG_P;
    A.HP = Math.min(A.HP - E.a.HD + E.a.HR, A.origin.HP);
    A.SHD = Math.min(A.SHD - E.a.SD + E.a.SR, A.origin.SHD);
    B.HP = Math.min(B.HP - E.b.HD + E.b.HR, B.origin.HP);
    B.SHD = Math.min(B.SHD - E.b.SD + E.b.SR, B.origin.SHD);
  }

  roundREG() {
    const A = this.after.a;
    const B = this.after.b;
    const E = this.after.e;
    if (!E.roundFlag.a || !E.roundFlag.b) return;

    const roundHRA =
      A.HP_REG_P * ((A.HP_REG_K / 100) * A.origin.HP + A.HP_REG_C);
    const roundSRA =
      A.SHD_REG_P * ((A.SHD_REG_K / 100) * A.origin.SHD + A.SHD_REG_C);
    const roundHRB =
      B.HP_REG_P * ((B.HP_REG_K / 100) * B.origin.HP + B.HP_REG_C);
    const roundSRB =
      B.SHD_REG_P * ((B.SHD_REG_K / 100) * B.origin.SHD + B.SHD_REG_C);

    A.HP = Math.min(A.HP + roundHRA, A.origin.HP);
    A.SHD = Math.min(A.SHD + roundSRA, A.origin.SHD);
    B.HP = Math.min(B.HP + roundHRB, B.origin.HP);
    B.SHD = Math.min(B.SHD + roundSRB, B.origin.SHD);
    E.a.HR += roundHRA;
    E.a.SR += roundSRA;
    E.b.HR += roundHRB;
    E.b.HR += roundSRB;
    E.roundFlag.a = false;
    E.roundFlag.b = false;
  }

  refreshSPD() {
    const m = this.after.e.s == "a" ? "b" : "a";
    this.after.e.spd[m] = this[m].status.ATK_SPD;
  }
}
