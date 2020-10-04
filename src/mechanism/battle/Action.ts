import { BattleInfo } from "@/mechanism/battle/BattleInfo";
import _ from "lodash";
import { Mob } from "@/mechanism/mob/Mob";
import { BattleStatus } from "@/mechanism/battle/BattleStatus";

export class Action {
  a: Mob;
  b: Mob;
  before: {
    a: BattleStatus;
    b: BattleStatus;
    battle: BattleInfo;
  };
  after: {
    a: BattleStatus;
    b: BattleStatus;
    battle: BattleInfo;
  };

  constructor(
    a: Mob,
    b: Mob,
    before: { a: BattleStatus; b: BattleStatus; battle: BattleInfo }
  ) {
    this.a = a;
    this.b = b;
    this.before = before;
    this.after = _.cloneDeep(before);
  }

  run(): Action {
    const spdCounter = this.after.battle.spdCounter;
    const spdThisAct = Math.min(spdCounter.a, spdCounter.b);
    spdCounter.a -= spdThisAct;
    spdCounter.b -= spdThisAct;
    if (spdCounter.a == 0) {
      this.b.run(this.after.b, this.after.a, this.after.battle);
      spdCounter.a = this.after.a.ATK_SPD;
    } else if (spdCounter.b == 0) {
      this.a.run(this.after.a, this.after.b, this.after.battle);
      spdCounter.b = this.after.b.ATK_SPD;
    }

    return this;
  }
}
