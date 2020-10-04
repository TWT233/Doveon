import { BattleStatus } from "@/mechanism/battle/BattleStatus";
import { BattleInfo } from "@/mechanism/battle/BattleInfo";
import { normalAttack } from "@/mechanism/mob/helper";
import { NPC } from "@/mechanism/mob/NPC";
import { Status } from "../build/Status";
import { Aura } from "@/mechanism/build/Aura";

export class Wooden implements NPC {
  name = "Wooden";
  type = "NPC";
  aura = new Aura();
  lvl: number;
  p: number;
  skill = [
    {
      name: "normal",
      type: "normal",
      handler: normalAttack
    }
  ];

  constructor(lvl: number, p = 1) {
    this.lvl = lvl;
    this.p = p;
  }

  get status(): Status {
    return {
      HP: this.p * this.lvl * 200,
      HP_REG_A: this.p * 5,
      HP_REG_B: 0,
      ATK_PHY_A: 0,
      ATK_PHY_B: this.p * this.lvl * 20,
      ATK_MAG_A: 0,
      ATK_MAG_B: this.p * this.lvl * 2,
      ATK_ABS: 0,
      ATK_SPD_A: 0,
      ATK_SPD_B: this.p * this.lvl * 3,
      THR_PHY_A: 10,
      THR_PHY_B: 0,
      THR_MAG_A: 0,
      THR_MAG_B: 0,
      SKI_CHA: this.lvl,
      CRI_CHA: this.lvl,
      THR_CRI: 0,
      HP_STL: 0,
      DEF_PHY_A: 0,
      DEF_PHY_B: this.lvl * 3,
      DEF_MAG_A: 0,
      DEF_MAG_B: this.lvl,
      BAR_PHY: 0,
      BAR_MAG: 0,
      SHD: this.p * this.lvl * 30,
      SHD_REG_A: 0,
      SHD_REG_B: 0,
      REF: 0
    };
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
