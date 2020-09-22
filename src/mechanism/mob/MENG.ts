import { Mob } from "@/mechanism/mob/Mob";
import { BattleStatus } from "@/mechanism/battle/BattleStatus";
import { BattleInfo } from "@/mechanism/battle/BattleInfo";
import { normalAttack } from "@/mechanism/mob/helper";

export class MENG implements Mob {
  name = "MENG";
  type = "Card";
  skill = [
    {
      name: "normal",
      type: "normal",
      handler: normalAttack
    }
  ];

  run(
    self: BattleStatus,
    target: BattleStatus,
    battle: BattleInfo
  ): { skillIndex: number } {
    this.skill[0].handler(self, target, battle);
    return { skillIndex: 0 };
  }
}
