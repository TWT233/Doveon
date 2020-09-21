import { BattleInfo } from "@/mechanism/battle/BattleInfo";
import { BattleStatus } from "@/mechanism/battle/BattleStatus";

export interface Mob {
  name: string;
  type: string;
  skill: {
    name: string;
    type: string;
    handler: (
      self: BattleStatus,
      target: BattleStatus,
      battle: BattleInfo
    ) => string;
  }[];

  run(
    self: BattleStatus,
    target: BattleStatus,
    battle: BattleInfo
  ): { skillIndex: number };
}
