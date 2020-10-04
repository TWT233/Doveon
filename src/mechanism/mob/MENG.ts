import { BattleStatus } from "@/mechanism/battle/BattleStatus";
import { BattleInfo } from "@/mechanism/battle/BattleInfo";
import { normalAttack } from "@/mechanism/mob/helper";
import { PC } from "@/mechanism/mob/PC";
import { Build } from "@/mechanism/build/Build";
import { Status } from "../build/Status";

export class MENG implements PC {
  name = "MENG";
  type = "Card";
  skill = [
    {
      name: "normal",
      type: "normal",
      handler: normalAttack
    }
  ];
  build: Build;

  constructor(b: Build) {
    this.build = b;
  }

  get status(): Status {
    return this.build.status;
  }

  run(
    self: BattleStatus,
    target: BattleStatus,
    battle: BattleInfo
  ): { skillIndex: number } {
    this.skill[0].handler(self, target, battle);
    return { skillIndex: 0 };
  }
}
