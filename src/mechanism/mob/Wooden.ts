import { Mob } from "@/mechanism/mob/Mob";
import { BattleStatus } from "@/mechanism/battle/BattleStatus";
import { BattleInfo } from "@/mechanism/battle/BattleInfo";
import { normalAttack } from "@/mechanism/mob/helper";

export class Wooden implements Mob {
  name = "Wooden";
  type = "NPC";
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
