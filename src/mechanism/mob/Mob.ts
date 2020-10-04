import { BattleInfo } from "@/mechanism/battle/BattleInfo";
import { BattleStatus } from "@/mechanism/battle/BattleStatus";
import { Status } from "../build/Status";

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
  status: Status;

  run(
    self: BattleStatus,
    target: BattleStatus,
    battle: BattleInfo
  ): { skillIndex: number };
}
