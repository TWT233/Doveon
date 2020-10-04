import { Action } from "@/mechanism/battle/Action";
import { BattleInfo } from "@/mechanism/battle/BattleInfo";
import { NPC } from "@/mechanism/mob/NPC";
import { PC } from "@/mechanism/mob/PC";
import { BattleStatus } from "@/mechanism/battle/BattleStatus";

export class Battle {
  battleLog: Array<Action> = new Array<Action>();

  battleInfo: BattleInfo = new BattleInfo();

  a: PC;
  b: NPC;

  constructor(a: PC, b: NPC) {
    this.a = a;
    this.b = b;
  }

  run() {
    const aBS = new BattleStatus(this.a.status);
    const bBS = new BattleStatus(this.b.status);

    this.battleInfo.spdCounter.a = aBS.ATK_SPD;
    this.battleInfo.spdCounter.b = bBS.ATK_SPD;

    this.battleLog.push(
      new Action(this.a, this.b, {
        a: aBS,
        b: bBS,
        battle: this.battleInfo
      }).run()
    );
    // while (!this.isEnd()) {
    //   this.battleLog.push(
    //     new Action(
    //       this.a,
    //       this.b,
    //       this.battleLog[this.battleLog.length - 1].after
    //     ).run()
    //   );
    // }
  }

  next() {
    if (this.battleLog.length <= 0 || this.isEnd()) return;
    this.battleLog.push(
      new Action(
        this.a,
        this.b,
        this.battleLog[this.battleLog.length - 1].after
      ).run()
    );
  }

  isEnd(): boolean {
    return (
      this.battleLog[this.battleLog.length - 1].after.a.HP <= 0 ||
      this.battleLog[this.battleLog.length - 1].after.b.HP <= 0 ||
      this.battleLog.length > 100
    );
  }
}
